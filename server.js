const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});