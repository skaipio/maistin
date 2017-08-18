import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './components/Hello';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<Hello beerType="Scottish Ales" />);
  res.render('index', {
    title: 'Maistin',
    message: 'Welcome to Maistin!',
    content: html,
  });
});

app.listen(8080);
