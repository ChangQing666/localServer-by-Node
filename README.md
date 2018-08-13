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
5. 想实现🍉开机自动启动服务🍉，为了避免termnal窗口关闭服务停止的情况，
   想实现开机自动启动该服务，可以使用PM2来大显身手
6. PM2使用步骤如下：
> 安装pm2 
```
yarn global add pm2 或 npm install pm2 -g   
```

> cd 到想要运行服务文件夹根目录
```
pm2 start server.js  //(假设要启动的服务文件名为server.js)
```
```
pm2 save
```
```
pm2 startup
```

> 按要求粘贴下面生成的代码到命令行执行
```
sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup launchd -u xxxxxx --hp /Users/xxxxxx
```
> 输入密码
```
Password:
```
> 执行完毕


 



