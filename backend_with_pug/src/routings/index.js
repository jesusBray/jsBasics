const router = require('express').Router();
const indexController = require('../controllers');

router.get('/', indexController.getHome)

router.get('/**', indexController.getPageNotFound)

module.exports = router