const strPhone = '18270057708'
// 开始位置就匹配 ^
// 结束位置匹配 $ 最后都可以用钱解决
const regPhone = /^1[3-9]\d{9}$/
console.log(regPhone.test(strPhone))