/**
 * @Author: qinzhenxing
 * @Date:   2018-01-04T11:42:46+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-04T16:23:51+08:00
 */
var mysql = require('../config/mysql'); // 获取数据库连接配置

var Good = function() {}; // 预定义一个空的类，接下来只需要往里增加方法即可

Good.prototype.find = function(id, callback) {
  // 增加一个方法，名为find，传入参数为id和回调函数callback

  // sql查询语句，注意这里的“?”号，它会在query的时候被处理
  var sql = "SELECT * FROM goods WHERE id =?";

  // 获取mysql的连接池，以回调的方式处理（即获取成功后，执行下一步）
  mysql.getConnection(function(err, connection) {
    if (err) { callback(true); return; }
    // 获取成功后，执行query
    // 注意到这里有三个参数，第一个是sql语句，第二个是一个数组，第三个是回调函数
    // 需要着重说明的是第二个参数，它将依次替换sql里的“?”号
    // sql语句被替换后，会是这样的："SELECT * FROM goods WHERE id = " + id
    connection.query(sql, [id], function(err, results) {
      if (err) { callback(true); return; }
      callback(false, results);
    });
  });
};
Good.prototype.list = function(callback) {
  // 增加一个方法，名为find，传入参数为id和回调函数callback

  // sql查询语句，注意这里的“?”号，它会在query的时候被处理
  var sql = "SELECT * FROM goods";

  // 获取mysql的连接池，以回调的方式处理（即获取成功后，执行下一步）
  mysql.getConnection(function(err, connection) {
    if (err) { callback(true); return; }
    // 获取成功后，执行query
    // 注意到这里有三个参数，第一个是sql语句，第二个是一个数组，第三个是回调函数
    // 需要着重说明的是第二个参数，它将依次替换sql里的“?”号
    // sql语句被替换后，会是这样的："SELECT * FROM goods WHERE id = " + id
    connection.query(sql, [], function(err, results) {
      if (err) { callback(true); return; }
      callback(false, results);
    });
  });
};
module.exports = Good;
