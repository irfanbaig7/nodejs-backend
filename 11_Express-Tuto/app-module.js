const express = require("express")

const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Home page");
})

app.post('/api/data', (req, res) => {
    res.json({
        messeage: "data mil gaya",
        data: req.body
    })
})


// middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Somthing went wrong..")

})


const port = 3200;
app.listen(port, () => {
    console.log("Server kya kaheta tha...");
})
