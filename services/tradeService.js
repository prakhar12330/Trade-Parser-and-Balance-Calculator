// services/tradeService.js
const fs = require("fs");
const csvParser = require("../utils/csvParser");
const Trade = require("../models/trade");
const prices = require("../utils/prices");

module.exports = async (filePath) => {
  const results = await csvParser(filePath);

  const uniqueTrades = [];
  const tradeKeys = new Set();

  results.forEach((trade) => {
    const tradeKey = `${trade.utcTime}-${trade.operation}-${trade.market}-${trade.amount}-${trade.price}`;
    if (!tradeKeys.has(tradeKey)) {
      tradeKeys.add(tradeKey);
      uniqueTrades.push(trade);
    }
  });

  //to remove duplicate entry of data
  //if same data row exists then it won't take this entry
  for (const trade of uniqueTrades) {
    const existingTrade = await Trade.findOne({
      utcTime: trade.utcTime,
      operation: trade.operation,
      market: trade.market,
      amount: trade.amount,
      price: trade.price,
    });
    let coinType = trade.baseCoin === "MATIC" ? "matic-network" : "bitcoin";
    let curDate = new Date(trade.utcTime);
    let day = curDate.getUTCDate();
    let month = curDate.getUTCMonth() + 1;
    let year = curDate.getUTCFullYear();

    let formattedDay = String(day).padStart(2, "0");
    let formattedMonth = String(month).padStart(2, "0");

    curDate = `${formattedDay}-${formattedMonth}-${year}`;

    const marketPrice = await prices(coinType, curDate);
    trade.marketPrice = marketPrice;
    if (!existingTrade) {
      await Trade.create(trade);
    }
  }

  fs.unlinkSync(filePath); // Remove the uploaded file
};
