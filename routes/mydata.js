/**
 * @Author: Kiran Kumar Gundapuneni
 * @Date:   2022-03-30 17:18:03
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-03-30 18:43:49
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kiran Kumar Gundapuneni' });
});

module.exports = router;
