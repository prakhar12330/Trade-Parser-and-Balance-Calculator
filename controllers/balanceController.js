const balanceService = require("../services/balanceService");

module.exports = async (req, res, next) => {
  try {
    const { timestamp } = req.body;
    const balance = await balanceService(timestamp);
    if (balance.len === 0) {
      await res.status(200).send({
        success: true,
        message: "No such data exists before the given timestamp",
        data: balance,
      });
    }
    await res.status(200).send({
      success: true,
      message: "Data fetched and processed successfully",
      data: balance,
    });
  } catch (error) {
    next(error);
  }
};
