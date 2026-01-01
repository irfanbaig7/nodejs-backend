// learn fs

const fs = require("fs")
const path = require("path")

// create folder
const dataFolder = path.join(__dirname, "data")

// if dataFolder this does't exist then create
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder) // actual creating folder
    console.log("Data folder created");
}

// inside the folder create a file and also add some content(text)
const filePath = path.join(dataFolder, "example.txt")
fs.writeFileSync(filePath, "Is me kuch nahi hee ok")
console.log("File created");

// read ( get the file content )
const readContentFromFile = fs.readFileSync(filePath, "utf8")
console.log("INside the file  : ", readContentFromFile);

// Async way (Best approch for next journy)
const asyncFilePath = path.join(dataFolder, "jj.txt")
fs.writeFile(asyncFilePath, "Ye async data hai..", (err) => {
    if (err) throw err
    console.log("created file using async approch");

    // read asyn file also
    fs.readFile(asyncFilePath, "utf8", (err, data) => {
        if (err) throw err
        console.log("Inside the asyn flle : ", data);
    })
})

console.log("its comes before creations");

// task 
console.log("---------------- Task --------------------");

// create folder vai using async
const asynFloder = path.join(__dirname, "fs-prct")

// create file vai using async
const asyncFile = path.join(asynFloder, "nlww.txt")

if (!fs.existsSync(asynFloder)) {
    fs.mkdir(asynFloder, (err) => {
        if (err) throw err
    })
}

console.log("Folder created baby..");

fs.writeFile(asyncFile, "Kay baat hai bhai kya bak rahe ho", (err) => {
    if (err) throw err
    console.log("File written");
})
console.log("async file was created..");

fs.readFile(asyncFile, "utf-8", (err, data) => {
    if (err) throw err
    console.log("Inside texty file content reading : ", data);
})

