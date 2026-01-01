// learn about async/await

function dealy(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

async function dealedGreet(name) {
    await dealy(2000)
    console.log("name is :", name);
}

dealedGreet("samikhshh")


// now with try catch
console.log("---------------------------------");

async function divideFnn(num1, num2) {
    try {
        if (num2 === 0) throw new Error("Can't divide with zero..")
        return num1 / num2;
    } catch (error) {
        console.log("Error hai bhai..", error.message);
        return null
    }
}

async function mainFn() {
    console.log(await divideFnn(35, 5));
    console.log(await divideFnn(10, 0));
}

mainFn();
