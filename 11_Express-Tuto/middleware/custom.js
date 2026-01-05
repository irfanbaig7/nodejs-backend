const express = require("express")

const app = express();

// middlware's
const myCustomMiddleWare = (req, res, next) => {

    const currentDate = new Date().toLocaleString();

    console.log("This is an custom middleware baby..", `${currentDate}`);
    next();
}
app.use(myCustomMiddleWare)

app.get("/", (req,res) => {
    res.send("Kya haal chall")
} )
app.get("/setting", (req,res) => {
    res.send("Setting page");
} )

app.listen(3000, () => {
    console.log("custom Middle ware");
})