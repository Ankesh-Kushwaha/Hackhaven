const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token missing or malformed'
      });
    }

    const token = authHeader.split(' ')[1]; // Extract token part after "Bearer"

     // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach decoded info to request (so you can access req.user later)
    req.user = decoded;
    next(); //call the next middleware;
  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "error in authMidlleware",
      error:err.message
    })
  }
}

module.exports = {
   authMiddleware
}