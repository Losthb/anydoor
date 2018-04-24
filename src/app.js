const http = require('http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk')
const path = require('path');


const server = http.createServer((req,res) =>{
  const filepath = path.join(conf.root,req.url);
  res.stausCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end(filepath);
});

server.listen(conf.port,conf.hostname,()=>{
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.red(addr)}`)
});
