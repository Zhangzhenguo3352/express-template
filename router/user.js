var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/reg',function(req,res){
  res.render('reg',{title:'reg 页面'})
})
