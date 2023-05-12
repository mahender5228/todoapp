
class errorhandler extends Error{
    new constructor(message, status){
        super(message);
        this.status = status;
        }
}


const errormiddleware = (err, req, res, next) => {
    err.message=err.message||"internal server error"
    err.status=err.status||500
    res.status(err.status).json({
        success: true,
        message: err.message,
    })
}

  module.exports = errormiddleware;
  module.exports = errorhandler
  
