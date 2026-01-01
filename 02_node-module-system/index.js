
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


// for secound modole**

const secModel = require("./second-model.js")

console.log(secModel.username);

console.log(secModel.max(10, 5));

try {
    console.log("Checking user are eligible or not for voting");
    const res = secModel.voteEligible(22)
    console.log("Yapp you are Eligible bcz your age is : ", res);  
} catch (error) {
    console.log("Caught Error", error.message);

}










