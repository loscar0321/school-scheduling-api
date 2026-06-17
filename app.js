const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const gradeLevelRoutes = require('./routes/gradeLevelRoutes');
const professorRoutes = require('./routes/professorRoutes');


app.use(express.json());

app.use('/users', userRoutes);
app.use('/grade-levels', gradeLevelRoutes);
app.use('/professors', professorRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('SERVER IS UP RUNNING')
});