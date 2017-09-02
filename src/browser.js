import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BeerList from './components/BeerList';
import 'bootstrap/dist/css/bootstrap.css';

const targetElement = document.getElementById('main');
const appDataJson = document.getElementById('appData').innerHTML;
const appData = JSON.parse(unescape(appDataJson));

ReactDOM.render(<BeerList beers={appData.beers} />, targetElement);
