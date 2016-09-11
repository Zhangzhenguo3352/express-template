var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/',function(req,res,next){ // 因为 router 设置了它是 在views 目录下的，统一，这是找哪一个，找的是 index 或者 login ，因此  /  就可以了‘’
  console.log('xxx')
  res.render('login',{title:'登录页面'})
})
