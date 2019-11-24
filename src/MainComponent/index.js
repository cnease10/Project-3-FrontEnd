import React, { Component } from 'react';
import AnimalList from '../AnimalList'
import {Grid} from 'semantic-ui-react'
import HomeComponent from '../HomeComponent';
import ShelterList from '../ShelterList'
import AddAnimal from '../AddAnimalForm'
import EditAnimal from '../EditAnimalForm'
import ShelterShow from '../ShelterShow';
import HeaderComponent from '../HeaderComponent'


class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            homepage: true,
            //bring in shelters from database & stick here
            shelters: [],
            //bring in animals from database & stick here
            animals: [],
            //lets us edit animal
            animalEdit: {
                name: '',
                breed: '',
                shelter: '',
                age: '',
                gender: '',
                photo: '',
                description: ''
            },
            //shows all animals
            animalspage: false,
            //shows all shelters
            shelterspage: false,
            //shows one shelter
            shelterpage: false,
            //this is for grabbing one shelter
            newshelter: [],
            //this is for grabbing all animals by shelter
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
            animalspage: false
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
                shelterspage: true,
                homepage: false,
                shelterpage: false, 
                animalspage: false
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
                animalspage: true,
                homepage: false,
                shelterspage: false,
                shelterpage: false,
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
                this.setState({
                    animals: [...this.state.animals, parsedResponse.data],
                    addpage: true
                })
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
            this.setState({
                animals: this.state.animals.filter((animal) => animal.id !== animalId),
                showdelete: true
                })
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
            homepage: false,
            shelterpage: true,
            shelterspage: false,
            animalspage: false,
            newshelter: newResponse
        })
        const animals = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/', {
            credentials: 'include',
            method: 'GET'
        });
        const parsedAnimals = await animals.json();
        const newParsed = await parsedAnimals.data
        
        console.log(newParsed)
        this.setState({
            animals: parsedAnimals.data,
            homepage: false,
            shelterspage: false,
            animalspage: false,

            
        })
        this.setState({
            shelteranimals: this.state.animals.filter((animal) => animal.shelter === shelterid
            )}) 
        console.log(this.state.shelteranimals)
    }
     //GET ONLY ANIMALS REALTED TO SHELTER
    // getShelterAnimals = async(shelterid) => {
    //     try {
    //         const animals = await fetch(process.env.REACT_APP_API_URL + '/api/v1/animals/', {
    //             credentials: 'include',
    //             method: 'GET'
    //         });
    //         const parsedAnimals = await animals.json();
    //         const newParsed = await parsedAnimals.data
            
    //         console.log(newParsed)
    //         this.setState({
    //             animals: parsedAnimals.data,
    //             homepage: false,
    //             shelterspage: false,
    //             animalspage: false,

                
    //         })
    //         this.setState({
    //             shelteranimals: this.state.animals.filter((animal) => animal.shelter === shelterid
    //             )}) 
    //         console.log(this.state.shelteranimals)
           
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

  
    render() {
        console.log('rendering main component')
        return(

            <div>
            <HeaderComponent shelter={this.getShelters} back={this.gethomepage} animals={this.getAnimals}/>
            {this.state.homepage ? <HomeComponent/> : null}
            {this.state.shelterspage ? <ShelterList  shelters={this.state.shelters} shelterShow={this.shelterShow} /> : null}
            {this.state.shelterpage ? <ShelterShow addAnimal={this.addAnimal} openModal={this.openModal} animalEdit={this.state.animalEdit} deleteAnimal={this.deleteAnimal} shelteranimals={this.getShelterAnimals} new={this.state.newshelter} animals={this.state.shelteranimals}/> : null }
            {this.state.animalspage ? <AnimalList animals={this.state.animals}/> : null}
            {this.state.showModal ? <EditAnimal  handleEdit={this.handleEdit} close={this.close} animalEdit={this.state.animalEdit} open={this.state.showModal} /> : null}
             {/* <AnimalList animals={this.state.animals} animalEdit={this.state.animalEdit} openModal={this.openModal} deleteAnimal={this.deleteAnimal}/>  */}
            {/* <AddAnimal addAnimal={this.addAnimal}/> */}
            {/* {this.state.adminlogged ? : null}  */}
            
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