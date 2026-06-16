const express = require('express');
const router = express.Router();
const professorController = require('../controller/professorController');

router.get('/',professorController.getAllProfessors);

module.exports = router;