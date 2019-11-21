import React, { Component } from 'react';
import AnimalList from '../AnimalList'
import {Grid} from 'semantic-ui-react'
import HomeComponent from '../HomeComponent';
import ShelterList from '../ShelterList'
import AddAnimal from '../AddAnimalForm'
import EditAnimal from '../EditAnimalForm'

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            showModal: false,
            shelters: [],
            animals: [],
            animalEdit: {
                name: '',
                breed: '',
                shelter: '',
                age: '',
                gender: '',
                photo: '',
                description: ''
            }
        }
    }
    componentDidMount() {
        this.getShelters();
        this.getAnimals();
    }
    
    //SHELTER CODE
    //INDEX OF SHELTERS
    getShelters = async() => {
        try {
            const shelters = await fetch(process.env.REACT_APP_API_URL + '/api/v1/shelters/', {
               credentials: 'include',
               method: 'GET' 
            });
            const parsedShelters = await shelters.json();
            console.log(parsedShelters);
            this.setState({
                shelters: parsedShelters.data
            })
        } catch (err) {
            console.log(err);
        }

    }
  

    //ANIMAL CODE
    //INDEX ROUTE
    getAnimals = async() => {
        try {
            const animals = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/', {
                credentials: 'include',
                method: 'GET'
            });
            const parsedAnimals = await animals.json();
            console.log(parsedAnimals)
            this.setState({
                animals: parsedAnimals.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    //CREATE ROUTE
    addAnimal = async(e, animalFromForm) => {
        e.preventDefault();
        try {
            const createdAnimalResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/', {
                method: 'POST',
                body: JSON.stringify(animalFromForm),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsedResponse = await createdAnimalResponse.json();
            if (parsedResponse.status.code === 200) {
                this.setState({animals: [...this.state.animals, parsedResponse.data]})
            } else {
                alert('we have an error')
            }
        } catch (err) {
            console.log(err)
        }
    }
    //EDIT ROUTE & MODAL OPEN/SUBMIT/CLOSE
    handleEdit = (e) => {
        this.setState({
            animalEdit: {
                ...this.state.animalEdit, [e.currentTarget.name]: e.currentTarget.value
            }
        })
    }
    //open modal
    openModal = (listAnimal) => {
        console.log(listAnimal)
        this.setState({
            showModal: true,
            animalEdit: {
                ...listAnimal
            }
        })
        console.log(this.state.showModal)
    }
    //close modal
    close = async(e) => {
        e.preventDefault();

        try{
            const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/' + this.state.animalEdit.id, {
                method: 'PUT',
                body: JSON.stringify(this.state.animalEdit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json();
            const newAnimalArray = this.state.animals.map((animal) => {
                if (animal.id === editResponseParsed.data.id) {
                    animal = editResponseParsed.data
                }
                return animal;
            })
            this.setState({
                animals: newAnimalArray,
                showModal: false
            })
        } catch(err) {
            console.log(err)
        }
    }
    //NOT WORKING 
    // //DELETE ROUTE
    deleteAnimal = async (animalId) => {
        console.log(animalId)
        const deleteResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/animals/' + animalId,  {
            method: 'DELETE',
            credentials: 'include'
        });
        const deleteResponseParsed = await deleteResponse.json();
        console.log(deleteResponseParsed)
        if (deleteResponseParsed.status.code === 200) {
            this.setState({animals: this.state.animals.filter((animal) => animal.id !== animalId)})
        } else {
            alert('there is an issue');
        }
    }
    render() {
        return(
            <Grid columns={2} textAlign='center'>
                <Grid.Row>
                   <HomeComponent/>  
                </Grid.Row>
               <Grid.Row>
                   <ShelterList  shelters={this.state.shelters} />
               </Grid.Row>
                <Grid.Row>
                    <AnimalList animals={this.state.animals} openModal={this.openModal} deleteAnimal={this.deleteAnimal}/>
                </Grid.Row>
                <Grid.Row>
                    <AddAnimal addAnimal={this.addAnimal}/>
                </Grid.Row>
                <Grid.Row>
                    <EditAnimal handleEdit={this.handleEdit} close={this.close} animalEdit={this.state.animalEdit}
                    open={this.state.showModal} />
                </Grid.Row>
            </Grid>
            
        )
    }
}

export default MainComponent