const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const db = require('./db');

app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('SERVER IS UP RUNNING')
});