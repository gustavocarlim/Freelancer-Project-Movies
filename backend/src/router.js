const express = require('express');
const movieController = require ('./controllers/movieController');
const router = express.Router();

router.get('/movies', movieController.getAll);

module.exports = router;