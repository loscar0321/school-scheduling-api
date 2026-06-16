const express = require('express');
const router = express.Router();

const gradeLevelController = require('../controller/gradeLevelController');

router.get('/', gradeLevelController.getAllGradeLevel);

module.exports = router;