/**
 * @Author: Your name
 * @Date:   2022-03-25 01:30:24
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-03-30 17:16:56
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
