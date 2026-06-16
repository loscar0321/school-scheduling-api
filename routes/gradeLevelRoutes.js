const express = require('express');
const router = express.Router();

const gradeLevelController = require('../controller/gradeLevelController');

router.get('/', gradeLevelController.getGradeLevel);

module.exports = router;