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
    
    app.get("/api/notes/:note", function(req, res){
        var chosen = req.params.note;
        
        console.log(chosen);
        
        for( var i = 0; i < notes.length; i++){
            if(chosen === notes[i].routeName){
                return res.json(notes[i]);
            }
        }
    })
    
    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        newNote.routeName = newNote.title.replace("/\s+/g", "").toLowerCase();
        notes.push(newNote);
        res.json(newNote);
    });
}