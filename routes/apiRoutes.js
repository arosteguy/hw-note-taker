 const store = require("../db/store") 
 const router = require("express").Router();
 
 
 
 router.get("/notes", function(req, res) {
   store
     .getNotes()
     .then(notes => res.json(notes))
     .catch(err => res.status(500).json(err));
 });
 
 router.post("/notes", (req, res) => {
   store
     .addNote(req.body)
     .then((note) => res.json(note))
     .catch(err => res.status(500).json(err));
 });
 
 // DELETE "/api/notes" deletes the note with an id equal to req.params.id
 router.delete("/notes/:id", function(req, res) {
   store
     .removeNote(req.params.id)
     .then(() => res.json({ ok: true }))
     .catch(err => res.status(500).json(err));
 });
 
 module.exports = router;
 

// module.exports = function (app) {
//     app.get("/api/notes", function (req, res) {
//         store
//         .getNotes()
//         .then(notes => res.json(notes))
//         .catch(err => res.status(500).json(err))
//     });
//     app.post("/api/notes", function (req, res) {
//         addNote(req.body)
//         .then((note) => res.json(note))
//         .catch(err => res.status(500).json(err));
//     });

//     app.delete("/api/notes/:id", function (req, res) {
//         store
//         removeNote(req.params.id)
//         .then(() => res.json ({ok : true}))
//         .catch(err => res.status(500).json(err));
//     });
        
//     app.put("/api/notes", function (req, res) {
//         updateNote(req.body)
//         .then((note) => res.json(note))
//         .catch(err => res.status(500).json(err));
//     });


// };





