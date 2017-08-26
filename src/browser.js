import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BeerList from './components/BeerList';

const targetElement = document.getElementById('main');
ReactDOM.render(<BeerList beers={APP_PROPS.beers} />, targetElement);
