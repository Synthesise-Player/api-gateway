"use strict";

const express = require('express');

const tracks = require('./tracks.routes');

var router = express.Router();

router.use('/tracks', tracks)
// router.use('/providers', providers)
// router.use('/service/apple', apple)
// router.use('/service/spotify', spotify)

router.use((req, res, next) => {
  res.status(200);
  res.type("txt").send("Hello Express!");
});

module.exports = router;
