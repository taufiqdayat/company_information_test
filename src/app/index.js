import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/company" render={()=>"cobak"} />
                </Switch>
            </div>
        );
    }
}

export default App;