const http = require("http")

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === "/") {
        res.end("This is a Home page")
    } else if (url === "/prj") {
        res.end("Projects page")
    } else {
        res.writeHead(404, { "content-type": "text/plain" })
        res.end("This page is not found")
    }
})

const port = 3200;
server.listen(port, () => {
    console.log(`Server running on ${port} port`);
})
