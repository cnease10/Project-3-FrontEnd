import React from 'react'
import {Button, Card, Image, Grid} from 'semantic-ui-react'
import './sheltershow.css'

function ShelterShow(props) {
     const shelteraddress = props.new.address
     const sheltercity = props.new.city
     const sheltername = props.new.name
     const shelterphone = props.new.phone
    //  const shelterpets = props.animals
    //  .map((animal) => {
    //      return(
    //          <ul>
    //              <li>{animal}</li>
    //          </ul>
    //      )
    //  })
    //  .map((shelter) => {
        //  return(
        // <div>
        // <ul>
        //     <li key={shelter.id}> {shelter.name} <br/> {shelter.address} <br/>  </li>
            
        // </ul>
        // </div>
        //  )
    //  })

     console.log('In ShelterShow shelter is:',  {shelteraddress})
     console.log('shelter show', {sheltername})
     const animals = props.animals.map((animal) => {
         return(
            <Grid> 

         
            <Grid.Row >
             <Grid.Column>
            <Card>
            <Image src={animal.photo} wrapped ui={false} />
            {/* <Card.Content>{animal.photo}</Card.Content> */}
            {/* <Card.Content>
            <img src={animal.photo} alt=""></img>
            </Card.Content> */}
            <Card.Content>
            <Card.Header>{animal.name}</Card.Header>
            <Card.Meta>Breed: {animal.breed}</Card.Meta>
            <Card.Description>
            {animal.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            Age: {animal.age} <br/>
            Gender: {animal.gender}
            </Card.Content>
            <Card.Content>
            <Button className="ui color1 button" onClick={() => props.openModal(animal.id)}>Edit Animal</Button>
            <Button className="ui color1 button" onClick={() => props.deleteAnimal(animal.id)}>Adopt Animal</Button>
            </Card.Content>
            </Card>
            </Grid.Column>
              
            </Grid.Row>
                
               </Grid>

         )
     })
    return(
        <div className="animallist">
           <div className="shelter">
            <h1 className="homeh1">{sheltername}</h1>
            <p> {shelteraddress} {sheltercity} {shelterphone}</p>
            {/* <section>{shelterpets}</section> */}
            <Button className="ui color1 button" onClick={() => {props.shelteranimals(props.new.id)}}>Show me your pets</Button>
           </div>
            <Grid> 
            {animals} 
             </Grid>      
        </div>
    )
   
}

export default ShelterShow