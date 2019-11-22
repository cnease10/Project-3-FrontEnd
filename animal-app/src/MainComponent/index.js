import React, { Component } from 'react';
import AnimalList from '../AnimalList'
import {Grid} from 'semantic-ui-react'
import HomeComponent from '../HomeComponent';
import ShelterList from '../ShelterList'
import AddAnimal from '../AddAnimalForm'
import EditAnimal from '../EditAnimalForm'
import ShelterShow from '../ShelterShow';
import FooterComponent from '../FooterComponent'
import HeaderComponent from '../HeaderComponent'
import { parse } from 'querystring';

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            homepage: true,
            //bring in shelters from database & stick here
            shelters: [],
            //bring in animals from database & stick here
            animals: [],
            
            animalEdit: {
                name: '',
                breed: '',
                shelter: '',
                age: '',
                gender: '',
                photo: '',
                description: ''
            },
            animalspage: false,
            shelterspage: false,
            shelterpage: false,
            newshelter: [],
            shelteranimals: [],
            //admin page
            adminlogged: false,
            addpage: false,
            showeditbutton: false,
            showModal: false,
            showdelete: false
            
        }
    }
    componentDidMount() {
        // this.getShelters();
        // this.getAnimals();
        // this.showReal();
        // this.shelterSee();
        this.getShelterAnimals();
    }
    gethomepage = () => {
        this.setState({
            homepage: true,
            shelterspage: false,
            shelterpage: false,
            addpage: false,
            showModal: false,
            showdelete: false,
        })
    }
    // getadminpage = () => {
    //     this.setState({
    //         adminlogged: true,
    //         addpage: true,
    //         showdelte: true,
    //         showeditbutton: true

    //     })
    // }
    //SHELTER CODE
    //INDEX OF SHELTERS
    getShelters = async() => {
        try {
            const shelters = await fetch(process.env.REACT_APP_API_URL + '/api/v1/shelters/', {
               credentials: 'include',
               method: 'GET' 
            });
            const parsedShelters = await shelters.json();
            // console.log(parsedShelters);
            this.setState({
                shelters: parsedShelters.data,
                shelterspage: true
            })
            console.log('hitting route')
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
            // console.log(parsedAnimals)
            this.setState({
                animals: parsedAnimals.data,
                animalspage: true
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
    
    //DELETE ROUTE
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
    //INDIE SHELTER SHOW ROUTE
    shelterShow = async(shelterid) => {
        const shelterResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/shelters/' + shelterid, {
            method: 'GET',
            credentials: 'include'
        });
        const parsedResponse = await shelterResponse.json();
       
        const newResponse = parsedResponse.data
       
        console.log(newResponse)
        this.setState({
            shelterpage: true,
            shelterspage: false,
            // shelters: this.state.shelters.filter((shelter) => shelter.id === shelterid).data
            newshelter: newResponse
        })
        console.log(this.newshelter)
        const animalResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/', {
            method: 'GET',
            credentials: 'include'
        });
        const parsedResponse2 = await animalResponse.json();
        const newResponse2 = parsedResponse2.data
        console.log(newResponse2)
        if (newResponse2.shelter === shelterid.id) {
            this.setState({
                shelteranimals: newResponse2
            })
        } else {
            console.log('errrror bitch')
        }
    }
     //GET ONLY ANIMALS REALTED TO SHELTER
     getShelterAnimals = async(shelterid) => {
        try{
            const shelter = await fetch(process.env.REACT_APP_API_URL + '/api/v1/shelters/' + shelterid, {
                credentials: 'include',
                method: 'GET'
            });
            const parsedResponse = shelter.json();
            const newResponse = parsedResponse.data
            const animalResponse = newResponse.shelter_specs
            console.log(animalResponse)
        } catch(err) {
            console.log(err)
        }
    }

  
    render() {
        console.log('rendering main component')
        
        return(
            <div>
            <HeaderComponent shelter={this.getShelters} back={this.gethomepage} animals={this.getAnimals}/>
            {this.state.shelterspage ? <ShelterList  shelters={this.state.shelters} shelterShow={this.shelterShow} /> : <HomeComponent/>}
            {this.state.shelterpage ? <ShelterShow shelteranimals={this.getShelterAnimals} new={this.state.newshelter} animals={this.state.shelteranimals}/> : null }
            {this.state.animalspage ? <AnimalList animals={this.state.animals}/> : null}
            {/* {this.state.adminlogged ? <AnimalList animals={this.state.animals} openModal={this.openModal} deleteAnimal={this.deleteAnimal}/> : null} */}
            
            <FooterComponent />  
            </div> 
        )
    }
}

export default MainComponent
/// /* // <Grid columns={2} textAlign='center'>
    //     <Grid.Row>
    //        <HomeComponent/>  
    //     </Grid.Row>
    //    <Grid.Row>
    //        <ShelterList shelterShow={this.shelterShow} shelters={this.state.shelters} shelterPage={this.state.shelterpage}  />
    //    </Grid.Row>
       
    //        <ShelterShow selectShelter={this.state.newshelter}/>
      
    //     <Grid.Row>
    //         <AnimalList animals={this.state.animals} openModal={this.openModal} deleteAnimal={this.deleteAnimal}/>
    //     </Grid.Row>
    //     <Grid.Row>
    //         <AddAnimal addAnimal={this.addAnimal}/>
    //     </Grid.Row>
    //     <Grid.Row>
    //         <EditAnimal handleEdit={this.handleEdit} close={this.close} animalEdit={this.state.animalEdit}
    //         open={this.state.showModal} />
    //     </Grid.Row>
    // </Grid> */}