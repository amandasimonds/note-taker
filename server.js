// Dependencies
// ===========================================================
var express = require("express");
var db = require("./db/db.json");
var fs = require("fs");
var path = require("path");

const notes = [];
const note = {};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var PORT = process.env.PORT || 3000;


// Routes
// ===========================================================
require("./routes/htmlroutes")(app)
require("./routes/apiRoutes")(app)


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });