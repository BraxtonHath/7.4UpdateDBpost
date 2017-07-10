const Pokemon = require('../models/pokemon');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
  Placeholder: function(req, res) {
    Pokemon.find({}).then(function(results) {
      res.render('index', {model: results});
    });
  }
  , addPokemon: function(req, res) {
    const pokemon = new Pokemon({
      name: req.body.pokemonName,
      color: req.body.Color,
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
}

  , Extra: function(req, res) {
    var id = req.params.id;
    Pokemon.findOne({_id: id}).then(function(result) {
      if (result) {
        res.render('extra', {model: result});
      }
    });
  }
};
