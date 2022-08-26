const { Worker, isMainThread, parentPort } = require('worker_threads')
var fs = require('fs');
let file = "/server_assets/2mb";
if (isMainThread) {
    module.exports = async function timeConsumingOperationOnThreads(raw) {
        return new Promise((resolve, reject) => {
            const worker = new WorkerPool(__filename, {
                workerData: raw
            }, 8)


            worker.on('error', reject)
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`))
                }
            })
        })
    }
} else {
    worker.on('message', () => {
        fs.readFile(__dirname + file, 'utf8', function (err, data) {
            parentPort.postMessage(data);
        })
    })
}