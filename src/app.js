const http = require('http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk')

const server = http.createServer((req,res) =>{
  res.stausCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('hello,world');
});

server.listen(conf.port,conf.hostname,()=>{
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.red(addr)}`)
});
