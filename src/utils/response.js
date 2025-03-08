// sucess failure  response

const sendSuccessResponse = (res, message, data={}, statusCode = 200) => {
  res.status(statusCode).json({
    status: true,
    message,
    data,
  });
}

const sendErrorResponse = (res, message, error={}, statusCode = 500) => {
  res.status(statusCode).json({
    status: false,
    message,
    error
  });
}

module.exports = {sendSuccessResponse, sendErrorResponse}