import React, { Component } from 'react';
import AnimalList from '../AnimalList'
import {Grid} from 'semantic-ui-react'
import HomeComponent from '../HomeComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return(
            <HomeComponent/>
            
        )
    }
}

export default MainComponent