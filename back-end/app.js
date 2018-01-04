/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T17:05:08+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-04T16:25:29+08:00
 */
let express = require('express');
let path = require('path');
let good = require('./routes/goods');
let app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', function(req, res) {
  res.send({data: 'Hello World!'});
});

/* 处理路由请求 */
app.get('/api/getgoods/list', good.getLists);
app.get('/api/getDetail/:goodid', good.getGoods);

/* 启动服务器 */
var server = app.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`*** mysql数据库已启动，访问地址为 http://localhost/${port}`);
});
