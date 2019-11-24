import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Image, Card, Grid, Icon} from 'semantic-ui-react'
import './animallist.css'

function AnimalList(props) {
    const animals = props.animals.map((animal) => {
        return(
           <Grid> 

         
               <Grid.Row >
                <Grid.Column>

               
                <Card>
                    <Image src={animal.photo} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Meta>Breed: {animal.breed}</Card.Meta>
                    <Card.Description>
                    {animal.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    Age: {animal.age} <br/>
                    Gender: {animal.gender} <br/>
                    {/* Shelter: {animal.shelter} */}
                    </Card.Content>
                    <Card.Content>
                    <Button size="small" className="ui color1 button" onClick={() => props.openModal(animal)}><Icon name='edit outline'/>Edit Animal</Button>
                    <Button size="small" className="ui color1 button" onClick={() => props.deleteAnimal(animal.id)}><Icon name='heart outline'/>Adopt Animal</Button>
                    </Card.Content>
                    </Card>
                </Grid.Column>
              
            </Grid.Row>
                
               </Grid>
         
        )
    })
    return (
        

       <div className="animallist">
        <Grid >

            {animals}
        </Grid>
         </div> 
        )
    }
    
    export default AnimalList
    
   