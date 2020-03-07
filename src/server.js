const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const routes = require("./routes");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(routes);


mongoose.connect('mongodb+srv://joao:TXHIFJVa6DxL9ZUN@cluster0-dtzkd.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, console.log("Connected database"));

app.listen(3333);