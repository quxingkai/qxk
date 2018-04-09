var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(process.cwd(), 'static')));
var router = require('./route/router')(app);

// 页面丢失
app.use(function (req, res, next) {
    var err = new Error('页面跑丢了~');
    err.status = 404;
    next(err);
});
// 服务器故障
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    if (err.status) {
        res.send(err.message);
    } else {
        res.send('服务器故障');
    }
});
app.listen(9999);