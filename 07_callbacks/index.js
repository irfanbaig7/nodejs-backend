
const fs = require("fs")

function person(name, callbackfn) {
    console.log(`Username is ${name}`);
    callbackfn();
}

function address() {
    console.log("india");
}

person("irfaaaaa baig", address)

fs.readFile('inputt.txt', "utf8", (err, data) => {
    if (err) throw err
    console.log("inside the txt file :", data);
})

