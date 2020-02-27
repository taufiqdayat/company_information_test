import React, { Component } from 'react';
import Layout from './container/layout';

class MainApp extends Component {

    constructor(){
        super();
        this.state = {
            cobak:""
        }
    }

    render() {
        return (
            <Layout />
        );
    }
}

export default MainApp;