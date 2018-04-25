const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const Handlebars = require('handlebars');
const config = require('../config/defaultConfig');

const tplPath = path.join(__dirname,'../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req , res, filepath) {
  try {
    const stats = await stat(filepath);
    if(stats.isFile()){
      res.stausCode = 200;
      res.setHeader('Content-Type','text/plain');
      fs.createReadStream(filepath).pipe(res);
    }else if(stats.isDirectory()){
      const files = await readdir(filepath);
      res.stausCode = 200;
      res.setHeader('Content-Type','text/html');
      const dir = path.relative(config.root,filepath);
      const data = {
        title:path.basename(filepath),
        dir: dir ? `/${dir}` : '' ,
        files
      };
      res.end(template(data));
    }
} catch (ex) {
      console.error(ex);
      res.stausCode = 404;
      res.setHeader('Content-Type','text/plain');
      res.end(`${filepath} is not a directory or file\n ${ex.toString()}`);
}
}
