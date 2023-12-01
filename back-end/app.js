const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const slotRoutes = require('./routes/slotRoutes');
const patientRoutes = require('./routes/patientRoutes');
const messagesRoutes = require('./routes/messagesRoutes');

const path = require('path');
const verifyToken = require('./middlewares/authJWT'); // Use a relative path to import the verifyToken middleware
const cors = require('cors');
require('dotenv').config();


app.use(cors({
    origin: "http://localhost:4200"
}));

// Connect to the database
mongoose.connect("mongodb://mongodb/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware: Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error.message);
});

// Middleware: Parse requests of content-type - application/json
app.use(express.json());

// Middleware: Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Using user route
app.use(userRoutes);

// SlotRoutes
app.use(slotRoutes);

// PatientRoute
app.use(patientRoutes);
//messsagesRoutes
app.use(messagesRoutes);


// Set up the server to listen on the specified port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
