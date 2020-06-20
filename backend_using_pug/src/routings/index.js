const router = require('express').Router();
const controllers = require('../controllers')
module.exports = function(){
    router.get('/', controllers.getHome)
    router.get('/asd', controllers.getNotFound)
    return router;
}

