import React from 'react';
import ReactDOM from 'react-dom';
import A from './A';
//import * as serviceWorker from './serviceWorker';
//import Kclass from './K';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <A/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*let container;
container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Kclass/>, container);*/

// document.body.removeChild(container);
// container=null;

// root see html file
//serviceWorker.unregister();
