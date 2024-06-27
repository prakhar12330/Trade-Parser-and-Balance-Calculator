const Trade = require('../models/trade');

module.exports = async (timestamp) => {
    const date = new Date(timestamp);
    const trades = await Trade.find({ utcTime: { $lte: date } });
    const balances = {};

    trades.forEach(trade => {
        const coin = trade.baseCoin;
        const amount = trade.amount;
        if (trade.operation === 'Buy') {
            balances[coin] = (balances[coin] || 0) + amount;
        } else if (trade.operation === 'Sell') {
            balances[coin] = (balances[coin] || 0) - amount;
        }
    });

    return balances;
};