function displayEven(nums) {
    for (let i in nums) {
        if (nums[i] % 2 !== 0) continue
        console.log(nums[i])
    }
}

function existsInList(list, val) {
    let found = false
    for (let item of list) {
        if (item === val) {
            found = true
            break
        }
    }
    return found
}

function containsElement(list, val) {
    for (let item of list) {
        if (item === val) return true
    }
    return false
}
