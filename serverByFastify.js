const serveStatic = require('serve-static');
const fastify = require('fastify')();
const path = require('path');
fastify.use('/', serveStatic(path.resolve(__dirname, 'dist')));
fastify.listen(3002, function(){
  console.log("本地服务已启动，端口3002:  http://localhost:3002/");
});
