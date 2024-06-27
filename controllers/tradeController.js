const Trade = require("../models/trade");
const tradeService = require("../services/tradeService");

module.exports = async (req, res, next) => {
  try {
    const results = await tradeService(req.file.path);
    await res.status(200).send({
      success: true,
      message: "Trades successfully uploaded and saved",
      results: results,
    });
  } catch (error) {
    next(error);
  }
};
