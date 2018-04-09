var con = require('../config/connection')();
module.exports =  function (req, res) {
    console.log(req.body);
    var start = req.body.ind;
    con.query('select * from myinfo where id=' + start + '', function (err, result) {
        if (err) {
            console.log(err.message);
            res.json({code: 1, msg: err.message});
        } else {
            if (result.length > 0) {
                res.json({code:0, msg:result});
                // res.locals.data = result;
                // res.render('tab');
            } else {
                res.json({code: 2, msg: '暂无信息'});
            }
        }
    });
}