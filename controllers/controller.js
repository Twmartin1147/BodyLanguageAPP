var express = require("express");
var router = express.Router();
var bodylang = require("../models/bodylang.js");
var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  burger.read(function(data) {
    // console.log(data);
    var hbs_object = { burger: data };
    // console.log(hbs_object);
    res.render("index", hbs_object);
  });
});

router.post("/burger/add", function(req, res) {
  // console.log(req.body.user_burger)
  burger.insert(req.body.user_burger, function(data) {
    res.redirect("/burger");
  });
});

router.put("/burger/update/:id?", function(req, res) {
  var user_id = parseInt(req.params.id);
  burger.update(user_id, function(data) {
    res.redirect("/burger");
  });
});

router.put("/burger/delete/:id?", function(req, res) {
  var user_id = parseInt(req.params.id);
  burger.delete(user_id, function(data) {
    res.redirect("/burger");
  });
});
module.exports = router;
