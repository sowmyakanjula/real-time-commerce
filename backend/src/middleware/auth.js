const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'missing token' });
  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'invalid token' });
  }
};
