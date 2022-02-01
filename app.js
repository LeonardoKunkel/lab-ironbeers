const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', async (req, res) => {

  const allBeers = await punkAPI.getBeers();

  res.render('beers', {
    allBeers: allBeers
  });

});

app.get('/random-beer', async (req, res) => {

  const random = await punkAPI.getRandom();

  res.render('random-beer', {
    rBeer: random
  });
});

app.listen(3000, () => console.log(`It's alive on port 3000`));
