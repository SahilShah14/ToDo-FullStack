const errorResponse = (statusCode, message, error = null) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    if (error) err.originalError = error;
    return err;
  };
  
  module.exports = errorResponse;
  