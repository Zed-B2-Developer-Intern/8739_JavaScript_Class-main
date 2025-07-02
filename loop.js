for (let k = 1; k <= 5; k++) {
    if (k % 2 === 1) {
        console.log(k)
    }
}

const nums = [3, 6, 9, 12]

for (let idx in nums) {
    console.log(nums[idx])
}

for (let val of nums) {
    console.log(val)
}

let counter = 5
while (counter > 0) {
    console.log(counter)
    counter--
}

let index = 5
do {
    console.log(index)
    index--
} while (index > 0)
