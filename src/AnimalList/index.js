import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Image, Card} from 'semantic-ui-react'

function AnimalList(props) {
    const animals = props.animals.map((animal) => {
        return(
            <div>
                
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


           
                
           
            </div>
        )
    })
      //need a button/link that shows more about the animal
      //or we can just put all the info we need to show
      //on the card of the dog
    return (
        <div>
        <h2>Animal List</h2>
            {animals}
        </div>
    )
}

export default AnimalList
