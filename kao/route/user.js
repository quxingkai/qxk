var con = require('../config/connection')();
module.exports =  function (req, res){
    con.query('select * from myinfo', function (err, result) {
        if (err) {
            res.json({code: 0, msg: '服务器故障'});
        } else {
            if (result.length > 0) {
                res.locals = {
                    data: result
                };
                res.render('user');
            } else {
                res.json({code: 2, msg: '暂无数据'});
            }
        }
    });
}