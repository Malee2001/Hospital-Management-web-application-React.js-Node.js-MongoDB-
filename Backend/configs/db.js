const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://adithya:adithya@cluster0.jfwyk0z.mongodb.net/hms");

module.exports = { connection };
