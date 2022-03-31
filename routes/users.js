/**
 * @Author: Kiran Kumar Gundapuneni
 * @Date:   2022-03-25 01:30:24
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-03-30 19:46:34
 */
 var express = require('express');
 var router = express.Router();
 var times =0;
 
 /* GET users listing. */
 router.get('/', function(req, res, next) {
   times++;
   res.send(`User accesses are: ${times}`);
 });
 
 module.exports = router;
