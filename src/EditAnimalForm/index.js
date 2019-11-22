import React from 'react';
import {Modal, Form, Button, Header} from 'semantic-ui-react';
import './editanimal.css'


const EditDog = (props) => {
    return(
        <Modal open={props.open}>
            <Header>Edit Animal</Header>
            <div className="form">
            <Modal.Content>
                <Form onSubmit={props.close}>
                    <Header as="h4">Name:</Header>
                    <Form.Input type='text' name='name' value={props.animalEdit.name } onChange={props.handleEdit} />
                    <Header as="h4">Breed:</Header>
                    <Form.Input type='text' name='breed' value={props.animalEdit.breed } onChange={props.handleEdit} />
                    Shelter:
                    <Form.Input type='text' name='shelter' value={props.animalEdit.shelter } onChange={props.handleEdit} />
                    Age:
                    <Form.Input type='text' name='age' value={props.animalEdit.age } onChange={props.handleEdit} />
                    Gender:
                    <Form.Input type='text' name='gender' value={props.animalEdit.gender } onChange={props.handleEdit} />
                    Photo:
                    <Form.Input type='text' name='photo' value={props.animalEdit.photo } onChange={props.handleEdit} />
                    Description:
                    <Form.Input type='text' name='description' value={props.animalEdit.description } onChange={props.handleEdit} />
                    <Modal.Actions>
                        <Button type='submit'>
                            Edit Animal
                        </Button>
                    </Modal.Actions>
                </Form>
            </Modal.Content>
         </div>
 </Modal>


    )
}

export default EditDog