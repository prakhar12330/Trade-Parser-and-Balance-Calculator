const express = require('express');
const tradeRoutes = require('./tradeRoutes');
const balanceRoutes = require('./balanceRoutes');

const router = express.Router();

router.use('/trades', tradeRoutes);
router.use('/balance', balanceRoutes);

module.exports = router;
