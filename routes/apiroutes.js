var fs = require("fs");
var path = require("path");
var express = require("express");
var app = express();

const notes = [];
const note = {};

module.exports = function(app){

    app.get("/api/notes", function(req, res){
        return res.json(notes);
    });
    
    var id;

    app.post("/api/notes", function(req, res){
        var note = req.body;
        notes.push(note);
        res.json(note);
    });

    app.delete("/api/notes/:"+ id, function(req, res){
        var id = parseInt(req.params.id)
        console.log(req.params);
        console.log(req.params.id);
        console.log("current array: "+ JSON.stringify(notes));
        notes.splice(id, 1);
        console.log("new notes array: " + JSON.stringify(notes))
        res.redirect('/notes');
    });

//     for( var i = 0; i < notes.length; i++){
//         var id = notes.indexOf(notes[i]);
//         notes[i].id = id;
    
// }

    app.delete("api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`)
    });
    
}