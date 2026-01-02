const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Home page")
})
app.get("/contact", (req, res) => {
    res.send("contact page")
})

const port = 3500;
app.listen(port, () => {
    console.log("Server chal gaya bhai...");
})

