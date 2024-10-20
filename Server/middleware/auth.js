const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');
const errorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) return next(errorResponse(401, 'Not authorized'));

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) return next(errorResponse(404, 'User not found'));
    next();
  } catch (error) {
    next(errorResponse(401, 'Not authorized'));
  }
};
