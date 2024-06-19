// 编写一个函数 ，它接受一个10个整数的数组，
// 该函数以(123) 456-7890 返回电话字符串
// regExp 匹配字符串的一种数学模式
// 美国电话模式 /(XXX) XXX-XXXX/   
function createPhoneNumber(nums) {
    
    return "(" + nums[0] + nums[1] + nums[2] + ") " 
        + nums[3] + nums[4] + nums[5] + "-"
        + nums[6] + nums[7] + nums[8] + nums[9]
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))