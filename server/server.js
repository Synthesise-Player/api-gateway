"use strict";

const config = require('./config');
const app = require("./app").app;

console.log(config);
const port = config.port;

app.listen(port, () => {
  console.log(`starter listening on http://localhost:${port}`)
});