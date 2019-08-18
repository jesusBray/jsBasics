const MatesRouter = require('express').Router();
const Mates = require('./Mates');

class RuterTiendaMates {
    static ruter(app) {

        MatesRouter.get('./Mates',(req,res,next) => {
            Mates.getMates()
            .then((foundMates) => {
                res.send(foundMates);
            })
            .catch((error) => {
                console.log(error);
            });
        });
        app.use('./app',MatesRouter);
    }
}
module.exports = RuterTiendaMates;