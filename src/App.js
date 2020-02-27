import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
