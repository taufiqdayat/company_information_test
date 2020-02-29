import React, { Component } from 'react';
import Layout from './container/layout';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications'

class MainApp extends Component {

    render() {
        return (
            <div>
                <Layout />
                <NotificationContainer />
            </div>
        );
    }
}

export default MainApp;