# localServer-by-Node

#### 概述
- 项目目的：使用node本地启动服务进行打包后项目预览；
- 分别使用koa, express, fastify, nodejs原生四种方法，实际只需要取其中一种方法即可；
- 您只需要将您需要预览的html等静态文件放入dist文件夹即可；
- 本项目主要用于学习，承蒙厚爱，喜欢😍记得star哦；
- 号外，号外，喜欢打王者荣耀的，都是性情中人，喜欢😍记得star哦，有机会一起刚。
#### 项目目录结构如下：

```

localServer-by-Node
  ¦--dist
  ¦    ¦--index.html
  ¦    ¦--index.css
  ¦    ¦--index.js
  ¦    ¦--static
  ¦--package.json
  ¦--serverByExpress.js
  ¦--serverByKoa.js
  ¦--serverByFastify.js
  ¦--serverByNode.js
  

```


1. 安装node
2. 安装依赖包

```
npm install
```
3. 命令行执行server.js
```
node serverByKoa.js
```
4. 打开浏览器访问 http://localhost:3001/

