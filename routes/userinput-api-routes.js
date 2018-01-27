var Post_Input = require("../models/bodylang_users.js");

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/input", function(req, res) {
      var query = {};
      if (req.query.uaid) {
        query.UserID = req.query.uaid;
      }
      db.Post_Input.findAll({
        where: query
      }).then(function() {
        res.json(dbPost_Input);
      });
    });
  
    // Get rotue for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      db.Post_Input.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbPost_Input) {
        console.log(dbPost_Input);
        res.json(dbPost_Input);
      });
    });
  
    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
      db.Post.create(req.body).then(function(dbPost_Input) {
        res.json(dbPost_Input);
      });
    });
};  