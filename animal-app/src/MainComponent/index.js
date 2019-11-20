import React, { Component } from 'react';
import AnimalList from '../AnimalList'
import {Grid} from 'semantic-ui-react'

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return(
            <AnimalList />
        )
    }
}