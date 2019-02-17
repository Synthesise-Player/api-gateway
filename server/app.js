"use strict";
require('dotenv').load();
const express = require('express');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
let index = require('./routes');

app.use(cookieParser());
app.use(morgan("combined"));
app.use('/api/v1', index);

module.exports = {
  app
}