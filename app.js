const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const gradeLevelRoutes = require('./routes/gradeLevelRoutes');

const db = require('./db');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/grade-levels', gradeLevelRoutes);

app.listen(3000, () => {
  console.log('SERVER IS UP RUNNING')
});