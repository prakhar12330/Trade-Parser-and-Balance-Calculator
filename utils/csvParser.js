const fs = require('fs');
const csv = require('csv-parser');

module.exports = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                const [baseCoin, quoteCoin] = data.Market.split('/');
                results.push({
                    utcTime: new Date(data.UTC_Time),
                    operation: data.Operation,
                    market: data.Market,
                    baseCoin,
                    quoteCoin,
                    amount: parseFloat(data['Buy/Sell Amount']),
                    price: parseFloat(data.Price)
                });
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};
