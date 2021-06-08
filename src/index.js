import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/projects" exact={true} component={Projects} />
            <Route path="/cv" exact={true} component={CV} />
            <Route path="/contact" exact={true} component={Contact} />

        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);
