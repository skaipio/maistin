import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getBeers } from './services/beerService';
import BeerList from './components/BeerList';

const app = express();

const port = 8080;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const beers = getBeers();
  const beerList = ReactDOMServer.renderToString(<BeerList beers={beers} />);
  res.render('index', {
    title: 'Maistin',
    message: 'Welcome to Maistin!',
    content: beerList,
    appData: {
      beers,
    },
  });
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.listen(port);

console.info(`App listening on port ${port}`);
