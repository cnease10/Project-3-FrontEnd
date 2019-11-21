import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';

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
            <div>
                <h4>Add an Animal</h4>
                <Form onSubmit={(e) => this.props.addAnimal(e, this.state)}>
                    Name:
                    <Form.Input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>

                    Breed:
                    <Form.Input type="text" name='breed' value={this.state.breed} onChange={this.handleChange}/>

                    Shelter:
                    <Form.Input type="text" name='shelter' value={this.state.shelter} onChange={this.handleChange}/>

                    Age:
                    <Form.Input type="text" name='age' value={this.state.age} onChange={this.handleChange}/>

                    Gender:
                    <Form.Input type="text" name='gender' value={this.state.gender} onChange={this.handleChange}/>

                    Photo:
                    <Form.Input type="text" name='photo' value={this.state.photo} onChange={this.handleChange}/>

                    Description:
                    <Form.Input type="text" name='description' value={this.state.description} onChange={this.handleChange}/>
                    <Button type="Submit">Add Animal</Button>
                </Form>
            </div>
        )
    }
}

export default AddAnimal