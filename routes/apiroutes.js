var fs = require("fs");
var path = require("path");
var express = require("express");
var app = express()

const notes = [];
const note = {};

module.exports = function(app){

    app.get("/api/notes", function(req, res){

        return res.json(notes);
    });
    
    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        notes.push(newNote);
        res.json(newNote);
        let id;
        

        for( let i = 0; i < notes.length; i++){
            let id = notes.indexOf(notes[i]);
            console.log(id)
            notes[i].id = id;
            console.log(notes);

            app.delete("/api/notes/" + id, function(req, res){
    
            });
        }
    });

    


    
}