import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Maistin',
    message: 'Welcome to Maistin!'
  });
});

app.listen(8080);