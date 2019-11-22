import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react'

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
            <Button onClick={() => props.openModal(animal)}>Edit Animal</Button>
            <Button onClick={() => props.deleteAnimal(animal.id)}>Adopt Animal</Button>
            </Card.Content>
            </Card>

         )
     })
    return(
        <div>
            <h1>{sheltername}</h1>
            <p> {shelteraddress} {sheltercity} {shelterphone}</p>
            {/* <section>{shelterpets}</section> */}
            <Button onClick={() => {props.shelteranimals(props.new.id)}}>Show me your pets</Button>
            {animals}        
        </div>
    )
   
    
    // // .map((shelter) => {
    // //     return(
    // //         <p>{shelter[0]}</p>
    // //     )
    // // })
    // console.log('In ShelterShow shelter is:',  shelter)
    
    // return(
    //     <div>
    //         <h2>Sup</h2>
           
    //     </div>
    // )
}

export default ShelterShow