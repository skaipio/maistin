import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BeerList from './BeerList';
import beers from '../services/beers.json';

const targetElement = document.getElementById('main');
ReactDOM.render(<BeerList beers={[]} />, targetElement);
