const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: String,
  level: Number,
  type: [{
    typeOne: { type: String, required: true },
    typeTwo: { type: String, default: 'None' }
  }],
  game: [String],
});

const pokemon = mongoose.model('pokemon', PokemonSchema);

module.exports = pokemon;
