const pokemon = require('../models/pokemon');


module.exports = { //finds our model
  list: function(req, res) {
    pokemon.find().then(results =>{
      res.render('pokemon/list', {model: results});
    });
  }
};
