let api = "http://localhost:8000";
const fs = require('fs');
const http = require('http');
const { dirname } = require('path');


let d = new Date();
let t = d.getTime()

let k = 0;
let noFiles = 5

for (let i = 0; i < noFiles; i++) {
    let file = fs.createWriteStream(__dirname + "/client_folder/test" + i);
    let request = http.get(api, function (response) {
        let arst = response.pipe(file);
        arst.on('finish', () => {
            k++;
            if (k == noFiles) {
                let a = new Date();
                let b = a.getTime() - t;
                console.log("Total Time: " + b + "ms");
                console.log("Throughput: " + (noFiles / b));
            }
        })
    });
}