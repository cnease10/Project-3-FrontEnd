import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Image, Card, Grid} from 'semantic-ui-react'
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
                    Shelter: {animal.shelter}
                    </Card.Content>
                    <Card.Content>
                    <Button className="ui color1 button" onClick={() => props.openModal(animal)}>Edit Animal</Button>
                    <Button className="ui color1 button" onClick={() => props.deleteAnimal(animal.id)}>Adopt Animal</Button>
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
    
    //     <Grid>
    //          <h2>Shelter Pets in Your Area</h2>
    //          <Grid.Row columns={4}>
    //   <Grid.Column>
    //   {animals}
    //   </Grid.Column>
    //   <Grid.Column>
    //     {animals}
    //   </Grid.Column>
    //   <Grid.Column>
    //   {animals}
    //   </Grid.Column>
    //   <Grid.Column>
    //   {animals}
    //   </Grid.Column>
    // </Grid.Row>
    //         </Grid>