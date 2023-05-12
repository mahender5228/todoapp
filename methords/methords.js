function sendResponse(res, status, data) {
    const response = {
      status,
      data
    };
    res.status(status).json(response);
  }
  module.exports=sendResponse

