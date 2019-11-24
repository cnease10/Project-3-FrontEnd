import React, {Component} from 'react';
import {Form, Button, Header, Grid} from 'semantic-ui-react';
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
       
            <div className="addanimal">
                <h2>Add an Animal</h2>
                <Form onSubmit={(e) => this.props.addAnimal(e, this.state)}>
                <Grid  divided>
                    <Grid.Row columns={3}>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Name:</Header>
                    <Form.Input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Breed:</Header>
                    <Form.Input type="text" name='breed' value={this.state.breed} onChange={this.handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header" >Shelter:</Header>
                    <Form.Input type="text" name='shelter' value={this.state.shelter} onChange={this.handleChange}/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Age:</Header>
                    <Form.Input type="text" name='age' value={this.state.age} onChange={this.handleChange}/>
                     </Grid.Column>
                     <Grid.Column>
                    <Header as="h2" className="ui colorone header" >Gender:</Header>
                    <Form.Input type="text" name='gender' value={this.state.gender} onChange={this.handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Photo:</Header>
                    <Form.Input type="text" name='photo' value={this.state.photo} onChange={this.handleChange}/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                    <Grid.Column>
                    <Header as="h2" className="ui colorone header">Description:</Header>
                    <Form.Input type="text" name='description' value={this.state.description} onChange={this.handleChange}/>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                    <Button className="ui colortwo button" type="Submit">Add Animal</Button>
                    </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Form>
            </div>
           
        )
    }
}

export default AddAnimal