const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);

module.exports = router;