import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyPage from './routes/overview';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/overview" component={CompanyPage} />
                </Switch>
            </div>
        );
    }
}

export default App;