
const fristModel = require("./frist.model.js")

console.log(fristModel.add(10, 15));
console.log(fristModel.sub(50, 10));

// handling error inside divide fun
try {
    console.log("Trying to divide by Zero");
    const result = fristModel.divide(100, 25);    
    console.log(result);    
    
} catch (error) {
    console.log("Caught error", error.message);
    
}







