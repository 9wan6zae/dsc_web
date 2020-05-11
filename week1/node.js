const http = require("http");

http
  .createServer((req, res) => {
    res.write("hello world!");
    res.write("2222");
    res.end();
  })
  .listen(8080);