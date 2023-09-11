const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

// Create a new series
router.post('/series', seriesController.createSeries);

// Get all series
router.get('/series', seriesController.getAllSeries);

// Get a specific series by ID
router.get('/series/:id', seriesController.getSeriesById);

// Update a series by ID
router.put('/series/:id', seriesController.updateSeries);

// Delete a series by ID
router.delete('/series/:id', seriesController.deleteSeries);

module.exports = router;
