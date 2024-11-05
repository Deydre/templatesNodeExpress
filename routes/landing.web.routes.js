const controllers = require('../controllers/landing.web.controllers');
const router = require('express').Router();

router.get('/home', controllers.getHome);
router.get('/contact', controllers.getContact);
router.get('/location', controllers.getLocation);
router.get('/mission', controllers.getMission);

module.exports = router;