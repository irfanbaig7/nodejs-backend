const express = require("express")
const app = express()
const port = 3000;


// routes
app.get("/", (req, res) => {
    res.send("Home pageeee")
})

app.get("/pro", (req, res) => {

    const pro = [
        {
            id: 1,
            lable: "irfan"
        },
        {
            id: 2,
            lable: "vk"
        },
        {
            id: 3,
            lable: "dhoni"
        },
    ]
    res.json(pro)
})


// get a single product ( dynamic route )
app.get("/pro/:id", (req, res) => {

    const prdId = parseInt(req.params.id)

    console.log("Id  : ", prdId);


    const products = [
        {
            id: 1,
            lable: "irfan"
        },
        {
            id: 2,
            lable: "vk"
        },
        {
            id: 3,
            lable: "dhoni"
        },
    ]

    // get sigle product
    const singlePrd = products.find(product => product.id === prdId)

    if (singlePrd) {
        res.json(singlePrd)
    } else {
        res.status(404).send("Product not found..")
    }

})


app.listen(port, () => {
    console.log("Server chal gaya bhai...", `${port}`);
})

