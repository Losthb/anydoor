const http = require('http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk')
const path = require('path');
const route = require('./helper/route');

const server = http.createServer((req , res) => {
  const filepath = path.join(conf.root,req.url);
  route(req, res, filepath);
});

server.listen(conf.port,conf.hostname,()=>{
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.red(addr)}`)
});
