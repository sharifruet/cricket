const Match = require('../models/match');

// Create a new match
exports.createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    return res.status(201).json(match);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating match' });
  }
};

// Get all matches
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll();
    return res.status(200).json(matches);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting matches' });
  }
};

// Get a specific match by ID
exports.getMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await Match.findByPk(id);
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    return res.status(200).json(match);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting match' });
  }
};

// Update a match by ID
exports.updateMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Match.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedMatch = await Match.findByPk(id);
      return res.status(200).json(updatedMatch);
    }
    return res.status(404).json({ error: 'Match not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error updating match' });
  }
};

// Delete a match by ID
exports.deleteMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Match.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: 'Match not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting match' });
  }
};
