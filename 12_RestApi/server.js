const express = require("express")

const app = express()

app.use(express.json())

let Allbooks = [
    {
        id: "1",
        title: "good things"
    },
    {
        id: "2",
        title: "daily habits"
    },
    {
        id: "3",
        title: "MOtivations"
    },
    {
        id: "4",
        title: "Sad"
    },

]

// intro
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to rest full api course insane..."
    })
})

// get all books
app.get("/get", (req, res) => {
    res.json(Allbooks)
})


// get a single book
app.get("/get/:id", (req, res) => {
    const book = Allbooks.find(item => item.id === req.params.id)
    console.log(book);
    if (book) {
        res.json(book)
    } else {
        res.json({
            message: "Book not found or invalid id.."
        })
    }

})


// add a new book
app.post("/add", (req, res) => {
    const newBook = {
        id: Allbooks.length + 1,
        title: `book series ${Allbooks.length + 1}`
    }

    Allbooks.push(newBook)

    res.status(200).json({
        message: "new book added",
        data: newBook
    })
})


//  { update the book details } req.body ka role
app.put("/update/:id", (req, res) => {
    const currentBook = Allbooks.find(items => items.id === req.params.id)

    if (currentBook) {
        currentBook.title = req.body.title || currentBook.title
        res.status(200).json({
            message: `Book with id ${req.params.id} updated sucessfully..`,
            data: currentBook
        })
    } else {
        res.status(404).json({
            message: "Book not found.."
        })
    }


})


// delete book
app.delete("/delete/:id", (req, res) => {
    const currentBookId = Allbooks.findIndex(items => items.id === req.params.id);
    if (currentBookId !== -1) {
        const deletedBook = Allbooks.splice(currentBookId, 1)
        res.status(200).json({
            message: "Book deleted success",
            data: deletedBook[0]
        })
    } else {
        res.status(404).json({
            message: "Book not found.."
        })
    }
})


app.listen(3000, () => {
    console.log("Server on running..");
})


