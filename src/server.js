import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getBeers } from './services/beerService';
import BeerList from './components/BeerList';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const beerList = ReactDOMServer.renderToString(<BeerList beers={getBeers()} />);
  res.render('index', {
    title: 'Maistin',
    message: 'Welcome to Maistin!',
    content: beerList,
  });
});

app.listen(8080);
