

function max(a,b){
    return a * b;
}

function voteEligible(age){
    if(age < 18){
        throw new Error("You can't do vote")
    }
    console.log("Voting successfully");    
    return age
}

const username = "rohit sharma"

module.exports = {
    max,
    voteEligible,
    username
}



