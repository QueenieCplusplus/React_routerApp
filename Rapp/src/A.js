// 2020, 7/18, noon
// Router

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function A(){

    return(
        <Router>
            <Switch>

                 <Route path="/poupou">
                     <F/>
                </Route>

                <Route path='/bye'>
                    <P/>
                 </Route>

                 <Route path="/">
                    <H/>
                </Route>

            </Switch>
        </Router>
    );

}

function H(){
    return <h3>Poupous Home</h3>
}

function F(){
    return <h3>Poupou kisses U</h3>
}

function P(){
    return <h5>Say Goodbye, see U.</h5>
}

