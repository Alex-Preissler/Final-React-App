const express = require("express");
const path = require("path");
const routes = require("./routes/account-routes");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/config");
const db = require("./models");

const app = express();

// Serve up static assets (usually on heroku)
if (config.env === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });

app.use(authRoutes);
app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(config.PORT, function() {
  console.log(`🌎 ==> Server now on port ${config.PORT}!`);
});
