import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import Ocinemae from './components/projects/Ocinemae';
import Fatima from './components/projects/Fatima';
import Braga from './components/projects/Braga';
import Roboforge from './components/projects/Roboforge';
import Sutive from './components/projects/Sutive';
import Aluguel from './components/projects/Aluguel';
import Lim from './components/projects/Lim';
import Draftools from './components/projects/Draftools';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/projects" exact={true} component={Projects} />
            <Route path="/cv" exact={true} component={CV} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route path="/ocinemae" exact={true} component={Ocinemae} />
            <Route path="/fatima" exact={true} component={Fatima} />
            <Route path="/braga" exact={true} component={Braga} />
            <Route path="/roboforge" exact={true} component={Roboforge} />
            <Route path="/sutive" exact={true} component={Sutive} />
            <Route path="/aluguel" exact={true} component={Aluguel} />
            <Route path="/lim" exact={true} component={Lim} />
            <Route path="/draftools" exact={true} component={Draftools} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);
