const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/path etc', (req, res) => {

    //this will eventually be database fetches
    res.send({ name: 'spot', age: 5, weight: '200lbs' });
});



module.exports = app;
