
const EventEmitter = require("events")

const myFristEmitter = new EventEmitter()

// reg event listener
myFristEmitter.on("greet", (name) => {
    console.log(`Helloo ${name}`);
})

myFristEmitter.emit("greet", "irfannn")



