
const fs = require("fs")

fs.readFile("inputt.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file ", err);
        return
    }
    console.log("file inputt.txt ka data : ", data);

    // modify the data
    const modifyData = data.toUpperCase();

    // actual make changes here 👇
    fs.writeFile('output.txt', modifyData, (err) => {
        if (err) {
            console.error("Error writing file ", err);
            return
        }
        console.log("Data writing the new file..");

        fs.readFile("output.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error writing file ", err);
                return
            }
            console.log("file output.txt ka data : ", data); 
        })

    })
})
