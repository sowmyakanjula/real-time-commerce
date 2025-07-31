const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Dummy user store
const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: 'registered' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'invalid' });
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
});

module.exports = router;
