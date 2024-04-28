const jwt = require("jsonwebtoken");

function checkIfAdmin(req, res, next) {
  const loggedInUser = req.loggedInUser;
  if (!loggedInUser) {
    return res.status(401).json({ message: "No token provided." });
  }
  const role = loggedInUser.role;
  if (role !== "admin") {
    return res.status(403).json({ message: "Forbidden." });
  }
  next();
}

module.exports = checkIfAdmin;
