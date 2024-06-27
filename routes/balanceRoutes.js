const express = require('express');
const balanceController = require('../controllers/balanceController');

const router = express.Router();

router.post('/getBalance', balanceController);

module.exports = router;
