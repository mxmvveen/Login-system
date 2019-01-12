const express = require('express');
const app = express();
const open = require('opn');

const nunjucks = require('nunjucks');

app.use(express.static('views'))

app.set('view engine', 'njk');

nunjucks.configure('views', {
    express: app,
    autoescape: true,
    watch: true
});

app.get('/', function(req, res) {
    res.render('pages/login');
});

app.get('/create', function(req, res) {
    res.render('pages/create');
});

exports.startServer = () => {
    app.listen(3000, () => {
        console.log('Server started!');
    });
}
