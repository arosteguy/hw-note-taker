var noteData = require("./noteData");


module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });
};