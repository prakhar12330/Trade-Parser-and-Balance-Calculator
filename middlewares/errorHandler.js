module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(200).send({
    success: false,
    message: err.message,
  });
};
