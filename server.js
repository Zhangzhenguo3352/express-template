var express = require('express');
var bodyParser = require('body-parser'); // 处理 post 请求的
var multerLib = require('multer'); // 处理 上传文件的
var cookieParser = require('cookie-parser'); // 解析 客户端 cookie数据
var cookieSession = require('cookie-session'); // 处理 cookie，过期时间、签到，来一次 签一次
var consolidate = require('consolidate'); // 处理 渲染模板 插件总和
var app = express();

var multer=multerLib({dest:'static/upload'});  // 解析 上传 必须要写的

// 2， 服务器
app.listen(3001,function(){
  console.log('3001 访问')
})
// 3, 使用中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer.any());    // 解析 上传 必须要写的
app.use(cookieParser())
app.use(cookieSession({
  name:'aaaa',  // 起一个名字
  keys:['aa','bb','cc'], // 完了不好破解写的
  maxAge:20*60*1000 // 设置过期时间为  20 分钟后
}))

// 4, 配置模板
app.set('views','views'); // 渲染饿模板是 哪个目录
app.set('view engine','html'); // 指定渲染 以 html 结尾的文件
app.engine('html',consolidate.ejs);  // 使用 consolidate 里面 包含的 ejs 方式渲染文件，后缀 改成 html

// 5, 路由
app.use('/',require('./router/index'))  // http://localhost:3001/
app.use('/login',require('./router/login')); // http://localhost:3001/login
app.use('/user',require('./router/user')); http://localhost:3001/user/reg

// 6，配置静态资源 ，为了 style，css ,img 路径正确

// 7,  404 路径不存在

// 8, 500  服务器挂掉了
