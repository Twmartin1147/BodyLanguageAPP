var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
    // send us to the next get function instead.
    res.redirect("/getemotions");
  });
  // get route, edited to match sequelize
router.get("/getemotions", function(req, res) {
    // replace old function with sequelize function
    db.UserEmotions.findAll({
    //   include: [db.userid],
      // Here we specify we want to return our burgers in ordered by ascending burger_name
      order: [
        ["emotions", "ASC"]
      ]
    })
    // use promise method to pass the burgers...
    .then(function(dbUserEmotioins) {
      // into the main index, updating the page
      var hbsObject = {
        emtions: dbUserEmotioins
      };
    //   return res.render("index", hbsObject);
      return res.render("bodylang", hbsObject);
    });
  });
  module.exports = router;