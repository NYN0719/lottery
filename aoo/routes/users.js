var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/up', function (req, res) {
    var json = req.body
	console.log(json)
    if (json.zh == '' || json.mm == '') {
        res.send({
            type: 'no',
            data: '参数缺失'
        })
    } else {
        var user_type = true
        var vip = eval(fs.readFileSync('./datalist/datas.txt', 'utf8'))
		
        for (var i = 0; i < vip.length; i++) {
            if (vip[i].zh == json.zh) {
                user_type = false
            }
        }
        if (user_type) {
            vip.push(json)
            fs.writeFileSync('./datalist/datas.txt', JSON.stringify(vip), 'utf8')
            res.send({
                type: 'yes',
                data: '注册成功'
            })
        } else {
            res.send({
                type: 'no',
                data: '用户名已存在'
            })
        }
    }

})

module.exports = router;
