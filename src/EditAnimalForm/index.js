import React from 'react';
import {Modal, Form, Button, Header, Grid, TextArea, Icon, Input} from 'semantic-ui-react';
import './editanimal.css'


const EditDog = (props) => {

    const newshelters = props.shelters.map((shelter) => {
        return (
             <option key={shelter.id} value={shelter.name && shelter.id}/>
        )
    })
    return(
        <Modal className="form" open={props.open}>
            <Header>Edit Animal</Header>

            <Modal.Content>
                <Form onSubmit={props.editAndGet}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                    <Header as="h2" className="ui colorone header" >Name:</Header>
                    <Form.Input focus type='text' name='name' value={props.animalEdit.name } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Column>
                    <Header as="h2" className="ui colorone header">Breed:</Header>
                    <Form.Input focus type='text' name='breed' value={props.animalEdit.breed } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Row columns={2}>
                       <Grid.Column>
                    <Header as="h2" className="ui colorone header">Shelter:</Header>
                    <Input name="shelter" value={props.animalEdit.shelter} onChange={props.handleEdit} list="shelter"/>
                        <datalist id='shelter'>
                            {newshelters}
                        </datalist>
                    {/* <Form.Input focus type='text' name='shelter' value={props.animalEdit.shelter } onChange={props.handleEdit} /> */}
                    </Grid.Column>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Age:</Header>
                    <Form.Input focus type='text' name='age' value={props.animalEdit.age } onChange={props.handleEdit} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                    <Header as="h2" className="ui colorone header">Gender:</Header>
                    <Form.Input focus type='text' name='gender' value={props.animalEdit.gender } onChange={props.handleEdit} />
                   </Grid.Column>
                   <Grid.Column>
                    <Header as="h2" className="ui colorone header">Photo:</Header>
                    <Form.Input focus type='text' name='photo' value={props.animalEdit.photo } onChange={props.handleEdit} />
                   </Grid.Column>
                    </Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                    <Header as="h2" className="ui colorone header">Description:</Header>
                    <Form.Field focus control={TextArea} name='description' value={props.animalEdit.description } onChange={props.handleEdit} />
                        </Grid.Column>
                    </Grid.Row>
                    <Modal.Actions>
                        <Button className="ui color1 button" type='submit'>
                            <Icon name="plus"/>Edit Animal
                        </Button>
                        <Button className="ui color1 button" onClick={() => {props.back()}}> <Icon name="redo"/>Back</Button>
                    </Modal.Actions>
                    </Grid>
                </Form>
            </Modal.Content>
    
 </Modal>


    )
}

export default EditDog