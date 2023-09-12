const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

// Create a new match
router.post('/matches', matchesController.createMatch);

// Get all matches
router.get('/matches', matchesController.getAllMatches);

// Get a specific match by ID
router.get('/matches/:id', matchesController.getMatchById);

// Update a match by ID
router.put('/matches/:id', matchesController.updateMatch);

// Delete a match by ID
router.delete('/matches/:id', matchesController.deleteMatch);

router.get('/', (req, res)=>{
    return res.json({success: true});
});
router.post('/', (req, res)=>{
    console.log(req.body.currentState.recentOvers);
    return res.json({success: true});
});

module.exports = router;