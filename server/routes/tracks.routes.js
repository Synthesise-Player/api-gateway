const express = require('express');
const tracksController = require('../controllers/tracks.controller');

var router = express.Router({ mergeParams: true })

router.route("/")
    .get(tracksController.getAll);

module.exports = router;