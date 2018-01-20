var connection = require("../config/connection.js");

var orm = {
  insert: function(some_tbl, some_col, some_val, cb) {
    connection.query(
      "INSERT INTO " + some_tbl + " ( " + some_col + " ) " + " VALUES (?)",
      [some_val],
      function(err, result) {
        cb(result);
      }
    );
  },
  read: function(some_tbl, cb) {
    connection.query("SELECT *  FROM " + some_tbl + ";", function(err, result) {
      cb(result);
    });
  },
  update: function(
    some_tbl,
    some_set_col,
    some_set_val,
    some_col_param,
    some_val_param,
    cb
  ) {
    connection.query(
      "UPDATE " +
        some_tbl +
        " SET " +
        some_set_col +
        " = ? WHERE " +
        some_col_param +
        " = ?",
      [some_set_val, some_val_param],
      function(err, result) {
        cb(result);
      }
    );
  },
  delete: function(some_tbl, some_col, some_val, cb) {
    connection.query(
      "DELETE FROM " + some_tbl + " WHERE " + some_col + " = ?",
      [some_val],
      function(err, result) {
        cb(result);
      }
    );
  }
};

module.exports = orm;
