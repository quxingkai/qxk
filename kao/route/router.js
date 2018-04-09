var info = require('../route/info');
var login = require('../route/login');
var logined = require('../route/logined');
var user = require('../route/user');
var change = require('../route/change');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
module.exports = function (app){
    app.get('/info', info);
    app.get('/login', login);
    app.post('/logined', urlencoded, logined);
    app.get('/user', user);
    app.post('/change', urlencoded, change);

}