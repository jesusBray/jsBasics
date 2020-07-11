const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hola mis ratillas');
})
app.listen(3000, () => {
    console.log('runnin in port 3000');  
})
