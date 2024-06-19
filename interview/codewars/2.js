function createPhoneNumber(nums) {
    let format = "(xxx) xxx-xxxx";
    for (let i = 0; i < nums.length; i++) {
        format = format.replace('x', nums[i])
    }
    return format
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))