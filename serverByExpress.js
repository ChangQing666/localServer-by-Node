const express = require('express');
const app = express();
app.use(express.static('dist')); // express.static是express提供的内置的中间件用来设置静态文件路径
app.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/' + 'index.html');
})
app.listen(3000, function(){
  console.log("本地服务已启动，端口3000:  http://localhost:3000/");
})
