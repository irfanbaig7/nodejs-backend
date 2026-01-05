const ex = require("express")
const app = ex();

// creating frist middleware

const myFristMiddleware = (req, res, next) => {

    console.log(`Main ek middlware hoon.. time ${localTime}`);
    next()
}

app.use(myFristMiddleware)

app.get("/", (req, res) => {
    res.send("Home pageeee")
})

app.get("/about", (req, res) => {
    res.send("ABout pageeee")
})

app.listen(3000, () => {
    console.log("Middleware server was running..");
})


