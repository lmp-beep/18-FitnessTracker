const path = require("path");

module.exports = function(app) {

    // homepage
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
    // when Continue Workout or New Workout is clicked
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // when Dashboard is clicked
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
