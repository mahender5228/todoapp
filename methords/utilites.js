const jwt = require('jsonwebtoken')


function sendResponsecookie(user,res,message,statuscode) {
  const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)

  

  res.status(statuscode)
     .cookie("token",token,{
      httpOnly:true,
      maxAge:60*60*1000,
      sameSite:"none",
      secure:true


     })
     .json({message});
}

module.exports = sendResponsecookie;