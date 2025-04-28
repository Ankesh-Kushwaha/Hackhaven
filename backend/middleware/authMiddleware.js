const authMiddleware = async (req, res, next) => {
  console.log('authentication done successFully');
  next();
}

module.exports = {
   authMiddleware
}