import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CompanyPage from './routes/overview';
import OfficePage from './routes/office';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Redirect exact from="/" to="/overview" />
                    <Route path="/overview" component={CompanyPage} />
                    <Route exact path="/office/:id" component={OfficePage} />
                </Switch>
            </div>
        );
    }
}

export default App;