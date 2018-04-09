var con = require('../config/connection')();
module.exports =  function (req, res) {
    con.query('select * from test where user=? and pwd=?', [req.body.user, req.body.pwd], function (err, result) {
        if (err) {
            console.log(err.message);
            res.json({code: 1, msg: '服务器故障'});
        } else {
            if (result.length > 0) {
                res.json({code: 0, msg: '登陆成功'});
            } else {
                res.json({code: 2, msg: '密码或用户名错误'});
            }
        }
    });
}