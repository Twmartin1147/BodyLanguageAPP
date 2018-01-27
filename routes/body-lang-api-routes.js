// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Bodylang = require("../models/bodylang_users.js");
var express = require("express")
var router = express.Router()
var path = require("path")
// Routes
// ============================================================={

// Get all users
router.get("/api/bodylang", function (req, res) {
    res.send("THIS IS THE BODYLANG ROUTE")
});

// TestRoute
router.get("/api/test", function(req, res) {
    res.json({hello:"world"})
});

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../routes/body-lang-api-routes.js"))
});
    
    
//Add User
router.post("/api/bodylang", function (req, res ){
    Bodylang.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        user_name:req.body.user_name,
        user_password:req.body.user_password,
        create_date:req.body.create_date
    }).then(function (BodyLang) {
        // `results` here would be the newly created user
        res.json(BodyLang);

    });

});

module.exports = router;