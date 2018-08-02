let url  = require("url"),
    fs   = require("fs"),
    http = require("http"),
    path = require("path");
http.createServer(function (req, res) {
  var pathname = __dirname + url.parse("/dist"+req.url).pathname; //资源指向dist目录
  if (path.extname(pathname) == "") {
    pathname += "/";
  }
  if (pathname.charAt(pathname.length - 1) == "/") {
    pathname += "index.html";
  }
  fs.exists(pathname, function (exists) {
    if (exists) {
      switch(path.extname(pathname)){
        case ".html":
          res.writeHead(200, {"Content-Type": "text/html"});
          break;
        case ".js":
          res.writeHead(200, {"Content-Type": "text/javascript"});
          break;
        case ".css":
          res.writeHead(200, {"Content-Type": "text/css"});
          break;
        case ".gif":
          res.writeHead(200, {"Content-Type": "image/gif"});
          break;
        case ".jpg":
          res.writeHead(200, {"Content-Type": "image/jpeg"});
          break;
        case ".png":
          res.writeHead(200, {"Content-Type": "image/png"});
          break;
        default:
          res.writeHead(200, {"Content-Type": "application/octet-stream"});
      }
      fs.readFile(pathname, function (err, data) {
        res.end(data);
      });
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.end("<h1>404 Not Found</h1>");
    }
  });
}).listen(3003);
console.log("本地服务已启动，端口3003: http://localhost:3003/");
