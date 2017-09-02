import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import BeerList from './components/BeerList';


const targetElement = document.getElementById('main');
const appDataJson = document.getElementById('appData').innerHTML;
const appData = JSON.parse(unescape(appDataJson));

ReactDOM.render(<BeerList beers={appData.beers} />, targetElement);
