var Bodylang = require("../models/emotions_tbl.js");

module.exports = function (app) {

app.get('/emotions', function (req, res) {
    Calculator.findAll()
      .then(function(emotions) {
        return res.json({emotions})
      })
      .catch(function(error) {
        return res.status(500).json({message: 'internal server error'});
      })
      
  });
};