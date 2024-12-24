const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }
  jwt.verify(token, JWT_SECRET)
};

module.exports = verifyAdminToken;
