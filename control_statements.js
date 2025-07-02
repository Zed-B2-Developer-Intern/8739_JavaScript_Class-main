const inputAge = 17

function checkVoteEligibility(value) {
    if (typeof value !== "number") {
        console.log("Invalid input")
    } else if (value < 18) {
        console.log("Too young")
    } else {
        console.log("You can vote")
    }
}

checkVoteEligibility("abc")
checkVoteEligibility(10)
checkVoteEligibility(inputAge)
