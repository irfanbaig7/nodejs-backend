// handling error's with promises

function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log("Timer start...");

delayFn(2000).then(() => console.log("After 2 sec promise resolved"))

console.log("End..");

// cathc part 
console.log("----------------- resolve & reject combine both here --------------");

function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("can't divide with Zero")
        } else {
            resolve(num1 / num2);
        }
    })
}


console.log("Dividing start...");

divideFn(10, 0).then(res=>console.log(res)).catch(err => console.log("Error!!", err))
