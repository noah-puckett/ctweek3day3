const express = require('express');
const app = express();

app.use(express.static('./public'));

const colorsArr = [ 
    { name: 'red', feeling: 'Wow!', fashionable: true }, 
    { name: 'blue', feeling: 'ooooh', fashionable: true },
    { name: 'green', feeling: 'niiiiiice', fashionable: false },
    { name: 'cyan', feeling: 'is it see-ann or sigh-ann we just don\'t know', fashionable: 'possibly' },
    { name: 'magenta', feeling: 'yeeEEESSS', fashionable: 'incredibly true' },
];

app.get('/api/v1/colors', (req, res) => {
    res.send(colorsArr);
});

app.get('/api/v1/colors/:name', (req, res) => {
    const color = colorsArr.find(color => {
        return color.name === req.params.name;
    });

    res.send(color);
});

module.exports = app;
