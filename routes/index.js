var express = require('express');
const  path  = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/images/upandrunning.jpg'));
});

router.post('/', function(req, res, next) {
  res.send('this is post request');
});
module.exports = router;
