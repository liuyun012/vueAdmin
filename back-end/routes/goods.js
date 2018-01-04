/**
 * @Author: qinzhenxing
 * @Date:   2018-01-03T17:34:13+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-04T16:33:01+08:00
 */
let express = require('express');
var Good = require('../models/goods');  // 引用goods模型
var good = new Good();

// 根据goodid获取任务数据
exports.getGoods = function(req, res) {
  var goodid = req.params.goodid;

  good.find(goodid, function(err, result) {
    if (err) {
      res.send('没有找到goodid为' + goodid + '的任务');
    } else if (undefined != result) {
      // 增加这个判断，否则在没有查询到的情况下（sql查询出错的情况下），Node.js会挂掉。
      res.send(result.length === 1 ? result[0] : result)
    } else {
      res.end("Error");
    }
  });
}

// 根据goodid获取任务数据
exports.getLists = function(req, res) {
  good.list(function(err, result) {
    if (err) {
      res.send('没有找到goodid为的任务');
    } else if (undefined != result) {
      // 增加这个判断，否则在没有查询到的情况下（sql查询出错的情况下），Node.js会挂掉。
      res.send(result.length === 1 ? result[0] : result)
    } else {
      res.end("Error");
    }
  });
}
