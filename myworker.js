const workerpool = require('workerpool');
let file = "/server_assets/2mb"
var fs = require('fs');


let readFile = () => {
    const res = fs.readFileSync(__dirname + file, { encoding: 'utf8', flag: 'r' })
    return res;
}

workerpool.worker({
    readFile: readFile
});