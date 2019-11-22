import React, {Component} from 'react';
import {Form, Button, Header} from 'semantic-ui-react';
import './addanimal.css'

class AddAnimal extends Component {
    constructor() {
        super();

        this.state= {
            name: '',
            breed: '',
            shelter: '',
            age: '',
            gender: '',
            photo: '',
            description: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render() {
        return(
       
            <div id="addanimal">
                <h2>Add an Animal</h2>
                <Form onSubmit={(e) => this.props.addAnimal(e, this.state)}>
                    <Header as="h2" color="white">Name:</Header>
                    <Form.Input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>

                    <Header as="h2" color="">Breed:</Header>
                    <Form.Input type="text" name='breed' value={this.state.breed} onChange={this.handleChange}/>

                    <Header as="h2" color="white">Breed:</Header>
                    <Form.Input type="text" name='shelter' value={this.state.shelter} onChange={this.handleChange}/>

                    <Header as="h2" color="white">Age:</Header>
                    <Form.Input type="text" name='age' value={this.state.age} onChange={this.handleChange}/>

                    <Header as="h2" color="white">Gender:</Header>
                    <Form.Input type="text" name='gender' value={this.state.gender} onChange={this.handleChange}/>

                    <Header as="h2" color="white">Photo:</Header>
                    <Form.Input type="text" name='photo' value={this.state.photo} onChange={this.handleChange}/>

                    <Header as="h2" color="white">description:</Header>
                    <Form.Input type="text" name='description' value={this.state.description} onChange={this.handleChange}/>
                    <Button type="Submit">Add Animal</Button>
                </Form>
            </div>
           
        )
    }
}

export default AddAnimal