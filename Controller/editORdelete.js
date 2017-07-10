const pokemon = require('../models/pokemon');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
  editPokemon: function(req, res) {
    var id = req.params.id;
    pokemon.findOne({_id: id}).then(function(result) {
      if (req.body.editName) {
        result.name = req.body.editName;
      }
      if (req.body.editColor) {
        result.color = req.body.editColor;
      }
      if (req.body.editLevel) {
        result.level = req.body.editLevel;
      }
      if (req.body.editType) {
        console.log('editType', req.body.editType);
        result.type.typeOne = req.body.editType;
      }
      if (req.body.editTypeTwo) {
        console.log('editTypeTwo', req.body.edit);
        result.type.typeTwo = req.body.editTypeTwo;
      }if (req.body.editGame) {
        result.game = req.body.editGame;
      }
      result.save();
      res.redirect('/');
    });
  }
  , deletePokemon: function(req, res) {
    var id = req.params.id;
    pokemon.deleteOne({_id: id}).then(function() {
      res.redirect('/');
    });
  }
};
