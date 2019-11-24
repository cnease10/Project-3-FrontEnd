import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon} from 'semantic-ui-react'
import './adminlogin.css'

class Login extends Component {
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
    //submit login form
    handleSubmit = async(e) => {
        e.preventDefault();
        const loginUrl= `${process.env.REACT_APP_API_URL}/api/v1/user/login`;
        const loginResponse = await fetch(loginUrl, {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include', //send a sesion cookie along with req
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();

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
                <h4>Sign In</h4>
                <Label className="ui colorthree header">Email</Label>
                <Form.Input type="email" name="email" onChange={this.handleChange} required/>
                <Label className="ui colorthree header">Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit" className="ui color1 button"><Icon name="sign-in"/>Log In</Button>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            </Form>
        )
    }
}

export default Login