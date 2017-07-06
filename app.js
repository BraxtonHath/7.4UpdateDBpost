const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');
const pokemonController = require("./Controller/pokemonController")
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/pokemon');

app.post('/', function(req, res) {
  // var Name = req.body.name;
  // var Color = req.body.color;
  // var Level = req.body.level;
  // var TypeOne = req.body.typeOne;
  // var TypeTwo = req.body.typeTwo;
  // var Game = req.body.game;

  const pokemon = new Pokemon({
    name: req.body.name,
    color: req.body.color,
    level: req.body.level,
    type:[{
    typeOne: req.body.typeOne,
    typeTwo: req.body.typeTwo
  }],
    game: [req.body.game],
  });
  console.log(pokemon);
  pokemon.save();
  res.redirect('/');
});


// app.get('/', pokemonController.list);

//
//
//
// const pokemon = new Pokemon({
//   name: 'Bulbasuar',
//   color: 'Green',
//   level: 5,
//   type: [{
//     typeOne: 'Grass',
//   }],
//   game : ['Red','Blue','All Games On']
// });
//
//
// pokemon.save();
// console.log(pokemonController);
app.get('/', pokemonController.list);


app.listen(3000);
