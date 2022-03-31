/**
 * @Author: Kiran Kumar Gundapuneni
 * @Date:   2022-03-30 19:48:53
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-03-30 19:57:49
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var x1 = Math.hypot(x);
  var x2 = Math.ceil(x);
  var x3 = Math.clz32(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.hypot(${x}) is ${x1} ; Math.ceil(${x}) is ${x2} ; Math.clz32(${x}) is ${x3}\n`);
});

module.exports = router;