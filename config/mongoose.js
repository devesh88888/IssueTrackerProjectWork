// const mongoose = require('mongoose');
// const url = 'mongodb://0.0.0.0:27017/db';
// // mongoose.connect('url')
// mongoose.connect(url);
// const db=mongoose.connection;

// //If any Error then Getting this Line
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// db.once('open',()=>{
//     console.log("Connected to Database :: MongoDB ")
// });

// module.exports=db;  //Exports db

//require the library
const mongoose = require("mongoose");

//connect to the database
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 8000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 10000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect("mongodb://localhost/db", options);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
