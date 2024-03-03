const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');

// *** DASHBOAD ROUTES ***
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);


module.exports = router;

