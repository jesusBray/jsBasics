const Express = require('express');
const app = Express();

const RuterTiendaMates = require('./resource');

const port = 3000;

app.listen(port,function(error){
    if (error) {
        console.log(error);
    }
    console.log("runing in port 3000");
});

RuterTiendaMates.ruter(app);