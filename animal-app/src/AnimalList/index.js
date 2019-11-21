import React from 'react'
// import {Link} from 'react-router-dom'
import {Button, Image} from 'semantic-ui-react'

function AnimalList(props) {
    const animals = props.animals.map((animal) => {
        return(
            <div>
            <ul>
                <li key={animal.id}> {animal.name} <br/> {animal.breed} <br/> {animal.age} <br/> {animal.description}<br/> {animal.gender} <br/> {animal.shelter} <br/> <Image src='{animal.photo}'/>  </li>
                <Button onClick={() => props.openModal(animal)}>Edit Animal</Button>
                <Button onClick={() => props.deleteAnimal(animal.id)}>Adopt Animal</Button>
            </ul>
            </div>
        )
    })
      //need a button/link that shows more about the animal
      //or we can just put all the info we need to show
      //on the card of the dog
    return (
        <div>
        <h3>Animal List</h3>
            {animals}
        </div>
    )
}

export default AnimalList
