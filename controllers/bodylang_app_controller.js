var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
// router.get("/", function(req, res) {
//     // send us to the next get function instead.
//    console.log("Testing",res);
   router.get("/", function (req, res) {
    res.send("THIS IS THE BODYLANG ROUTE")
  });
  // get route, edited to match sequelize
router.get("/useremotions", function(req, res) {
//     // replace old function with sequelize function
    db.useremotions.findAll()
     .then(function(useremotions) {
       return res.json({useremotions})
     })
     .catch(function(error) {
      return res.status(500).json({message: 'internal server error'});
    });
      console.log("Emotions");
      // result.render("bodylang", hbsObject);
    
  });

//     
//       order: [
//         ["emotions", "ASC"]
//       ]
//     })
//     // use promise method to pass the emotions...
    // .then(function(dbUserEmotioins) {
    //   // into the main index, updating the page
    //   var hbsObject = {
    //     emotions: dbUserEmotioins
    //   };
    // //   return res.render("index", hbsObject);
    //   return res.render("bodylang", hbsObject);
    
    // });
  // });
  module.exports = router;