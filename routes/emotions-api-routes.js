var db = require("../models");

module.exports = function (app) {

app.get('/emotions', function (req, res) {
  db.UserEmotions.findAll()
      .then(function(emotions) {
        return res.json({emotions})
      })
      .catch(function(error) {
        return res.status(500).json({message: 'internal server error'});
      })
      
  });
};