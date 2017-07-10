const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');
const pokemonController = require("./Controller/pokemonController")
const bodyParser = require('body-parser');
const path = require('path');
const editORdelete = require('./Controller/editORdelete')


const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/pokemon');


 // Start
 app.get('/', pokemonController.Placeholder);

 // add Pokemon
 app.post('/add', pokemonController.addPokemon);

 // go to details
 app.post('/extra/:id', pokemonController.Extra);

 // edit
 app.post('/edit/:id', editORdelete.editPokemon);

 // delete
 app.post('/delete/:id', editORdelete.deletePokemon);


 app.listen(3000, function() {
   console.log('Successfully started express application');
 });
