import React, { Component } from 'react'
import {Form, Label, Button, Message} from 'semantic-ui-react'


class Register extends Component {
    constructor() {
        super();
        this.state= {
            email: '',
            password: ''
        }
    }
    //handle the form value change
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    //submit register form
    handleSubmit = async(e) => {
        e.preventDefault();
        const registerResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/admins/register',  {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include', //send a sesion cookie along with req
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();

        //validation
        if (parsedResponse.status.code === 200) {
            console.log('success');
            this.props.history.push('/');
            //programatically change url using react-router
        } else {
            this.setState( {
                errorMsg: parsedResponse.status.message
            });
        }
    }
    render() {
        return (
            <Form className="form" onSubmit={this.handleSubmit}>
                <h4>Register New User</h4>
                <Label  className="ui colorthree header">Email</Label>
                <Form.Input type="email" name="email" onChange={this.handleChange} required/>
                <Label  className="ui colorthree header">Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit" className="ui color1 button">Sign Up</Button>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            </Form>
        )
    }
}

export default Register