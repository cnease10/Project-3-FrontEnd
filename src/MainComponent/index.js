import React, { Component } from 'react';
import AnimalList from '../AnimalList'
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
            adminshelterpage: false,
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
        // this.shelterShow();
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
    getadminpage = () => {
        if (this.props.adminlogged === true ) {
            this.setState({
                adminlogged: true,
                adminshelterspage: true

            })
        } 
        console.log(this.state.adminlogged)
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
            // console.log(parsedShelters);
            this.setState({
                shelters: parsedShelters.data,
                shelterspage: true,
                homepage: false,
                shelterpage: false, 
                animalspage: false,
                addpage: false,
            })
            console.log('hitting route')
            this.getadminpage();
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
    openAnimalAdd = async() => {
        this.setState({
            addpage: true,
            shelterpage: false
        })
        console.log('hitting open add')
    }
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
                    shelteranimals: [...this.state.shelteranimals, parsedResponse.data],
                    addpage: false,
                    shelterpage: true
                })
                console.log('hitting add animal')
                this.setState({ state: this.state });
            } else {
                alert('we have an error')
            }
            this.getadminpage();
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
                showModal: false,
                shelterpage: true,
            })
            this.setState({ state: this.state });
            this.shelterShow();
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
                shelterpage: true,
                
                })
                this.setState({ state: this.state });
        console.log('hitting delete after set state')
        this.getadminpage();
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
        this.getadminpage();
        console.log(this.state.adminlogged)
    }
     //DELETE AND SEE DELETION
    deleteAndGetShelterAnimals = async(animalId) => {
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
                shelteranimals: this.state.shelteranimals.filter((animal) => animal.id !== animalId),
                shelterpage: true,
                
                })
        console.log('hitting delete after set state')
        this.getadminpage();
        } else {
            alert('there is an issue');
        }
    }
    editAndGetShelterAnimals = async(e) => {
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
                showModal: false,
                shelterpage: true,
                
            })
            this.setState({
                shelteranimals: this.state.animals.filter((animal) => animal.shelter === editResponseParsed.data.shelter),
            })
            this.shelterShow();
            this.getadminpage();
        } catch(err) {
            console.log(err)
        }
    }

  
    render() {
        console.log('rendering main component')
        return(

            <div>
            <HeaderComponent shelter={this.getShelters} back={this.gethomepage} animals={this.getAnimals}/>
            {this.state.homepage ? <HomeComponent/> : null}
            {this.state.shelterspage ? <ShelterList  shelters={this.state.shelters} shelterShow={this.shelterShow} /> : null}
            {this.state.shelterpage ? <ShelterShow  adminlogged={this.state.adminlogged} deleteAndGet={this.deleteAndGetShelterAnimals} back={this.shelterShow} openAnimalAdd={this.openAnimalAdd} addAnimal={this.addAnimal} openModal={this.openModal} animalEdit={this.state.animalEdit} deleteAnimal={this.deleteAnimal} 
            shelterShow={this.shelterShow}shelteranimals={this.getShelterAnimals} new={this.state.newshelter} animals={this.state.shelteranimals} allanimals={this.state.animals}/> : null }
            {this.state.animalspage ? <AnimalList animals={this.state.animals}  openModal={this.openModal} animalEdit={this.state.animalEdit} deleteAnimal={this.deleteAnimal} shelteranimals={this.getShelterAnimals} new={this.state.newshelter}/> : null}
            {this.state.showModal ? <EditAnimal adminlogged={this.state.adminlogged} shelters={this.state.shelters} shelterpage={this.state.shelterpage} editAndGet={this.editAndGetShelterAnimals} back={this.shelterShow} handleEdit={this.handleEdit} close={this.close} animalEdit={this.state.animalEdit} open={this.state.showModal} /> : null}
            {this.state.addpage ? <AddAnimal addAnimal={this.addAnimal} shelters={this.state.shelters} animals={this.state.animals} /> : null } 
   
            
            </div> 
        )
    }
}

export default MainComponent
