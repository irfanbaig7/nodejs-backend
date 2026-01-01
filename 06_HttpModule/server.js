const http = require("http")

const server = http.createServer((req, res) => {
    console.log("Inside req  : ", req);
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("HEllo node js from http module aur mera naam hai irfan.")
})

const port = 3000;
server.listen(port, () => {
    console.log(`server running on ${port} port number`);
})

