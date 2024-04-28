const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization; // Bearer <token>
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided." });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }
    req.loggedInUser = decoded; // { email: '...', role: '...' }
    next();
  });
}

module.exports = verifyToken;
