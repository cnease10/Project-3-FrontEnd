import React from 'react';
import {Modal, Form, Button, Header, Grid, TextArea} from 'semantic-ui-react';
import './editanimal.css'


const EditDog = (props) => {
    return(
        <Modal className="form" open={props.open}>
            <Header>Edit Animal</Header>

            <Modal.Content>
                <Form onSubmit={props.close}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                    <Header as="h2" className="ui colorone header" >Name:</Header>
                    <Form.Input type='text' name='name' value={props.animalEdit.name } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Column>
                    <Header as="h2" className="ui colorone header">Breed:</Header>
                    <Form.Input type='text' name='breed' value={props.animalEdit.breed } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Row columns={2}>
                       <Grid.Column>
                    <Header as="h2" className="ui colorone header">Shelter:</Header>
                    <Form.Input type='text' name='shelter' value={props.animalEdit.shelter } onChange={props.handleEdit} />
                    </Grid.Column>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Age:</Header>
                    <Form.Input type='text' name='age' value={props.animalEdit.age } onChange={props.handleEdit} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                    <Header as="h2" className="ui colorone header">Gender:</Header>
                    <Form.Input type='text' name='gender' value={props.animalEdit.gender } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Column>
                    <Header as="h2" className="ui colorone header">Photo:</Header>
                    <Form.Input type='text' name='photo' value={props.animalEdit.photo } onChange={props.handleEdit} />
                   </Grid.Column>
                    </Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                    <Header as="h2" className="ui colorone header">Description:</Header>
                    <Form.Field control={TextArea} name='description' value={props.animalEdit.description } onChange={props.handleEdit} />
                        </Grid.Column>
                    </Grid.Row>
                    <Modal.Actions>
                        <Button type='submit'>
                            Edit Animal
                        </Button>
                    </Modal.Actions>
                    </Grid>
                </Form>
            </Modal.Content>
    
 </Modal>


    )
}

export default EditDog