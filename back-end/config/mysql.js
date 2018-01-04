/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T18:51:04+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-04T11:43:54+08:00
 */
 var mysql = require('mysql'); // 引用mysql模块
 var db = require('./db');

 var pool = mysql.createPool(db);
 module.exports = pool;
