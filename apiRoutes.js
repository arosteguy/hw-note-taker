var noteData = require("./noteData");


module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });
};
app.post.post("./api/notes", function (req, res) {
    noteData.push(req.body);
    res.json(true);
});
app.post("./api/clear", function() {
    noteData = [];
})