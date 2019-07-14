const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Routes
app.use(routes);

//Connect to MongoDB

var db = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(db, function(error){
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection is successful");
    }
});
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
//  var db = mongoose.connection;
//  db.on("error", console.error.bind(console, "connection error:"));
//  db.once("open",function(){
//      console.log("Mongo is connected");
//  })
// Start API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });