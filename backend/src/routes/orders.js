const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// In-memory orders
const orders = [];

router.post('/', auth, (req, res) => {
  const order = { id: orders.length + 1, user: req.user.username, status: 'placed' };
  orders.push(order);
  res.json(order);
});

router.get('/', auth, (req, res) => {
  const userOrders = orders.filter(o => o.user === req.user.username);
  res.json(userOrders);
});

module.exports = router;
