const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/auth", userRoutes);

//server
const Port = process.env.PORT || 5000;

const server = app.listen(Port, (req, res) => {
  console.log(`Server is started successfully on port ${Port}`);
});

//database connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
