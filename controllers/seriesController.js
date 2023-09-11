const Series = require('../models/series');

// Create a new series
exports.createSeries = async (req, res) => {
  try {
    const series = await Series.create(req.body);
    return res.status(201).json(series);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating series' });
  }
};

// Get all series
exports.getAllSeries = async (req, res) => {
  try {
    const series = await Series.findAll();
    return res.status(200).json(series);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting series' });
  }
};

// Get a specific series by ID
exports.getSeriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const series = await Series.findByPk(id);
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }
    return res.status(200).json(series);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting series' });
  }
};

// Update a series by ID
exports.updateSeries = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Series.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedSeries = await Series.findByPk(id);
      return res.status(200).json(updatedSeries);
    }
    return res.status(404).json({ error: 'Series not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error updating series' });
  }
};

// Delete a series by ID
exports.deleteSeries = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Series.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: 'Series not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting series' });
  }
};
