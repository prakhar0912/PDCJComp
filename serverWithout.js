var http = require('http');
var fs = require('fs');
let file = "/server_assets/2mb"


http.createServer(async (req, res) => {
    fs.readFile(__dirname + file, 'utf8', function (err, data) {
        res.end(data);
        console.log("File Sent!")
    })

}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
