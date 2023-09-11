const express = require('express');
const sequelize = require('./database');
const matchesRoutes = require('./routes/matchesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');

const app = express();

app.use(express.json());

// Define routes
app.use('/api', matchesRoutes);
app.use('/api', seriesRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
