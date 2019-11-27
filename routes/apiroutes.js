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
        var id;
        

        for( var i = 0; i < notes.length; i++){
            var id = notes.indexOf(notes[i]);
            notes[i].id = id;
            

            app.delete("/api/notes/"+id, function(req, res){
                console.log(req.params);
                console.log(id);
                console.log(newNote);
                console.log("current array: "+ JSON.stringify(notes));
                notes.splice(id, 1);
                console.log("please delete " + newNote.title);
                console.log("new notes array: " + JSON.stringify(notes))
                return;
            });

            
        }
    });


    app.delete("api/notes", function(req, res) {
        console.log(`Received a ${req.method} request from ${req.url}`)
    });
    

    


    
}