// 发红包算法
// 随机
// 公平或有趣 
// 多少人， total,  0.01, 加起来等于total 
// console.log(Math.random())
/**
 * @func 红包算法
 * @param {number} total 总金额 
 * @param {number} num 人数
 */
function hongbao(total, num) {
    // 发红包的那一刻就已经决定了
    // 宕机
    const arr = [];
    // 余额
    let restAmount = total;
    // 未领取人数
    let restNum = num;
    // num-1  
    for(let i =0; i < num -1; i++) {
        let amount = parseFloat(Math.random() *  (restAmount/restNum * 2)).toFixed(2)
        restAmount -= amount;
        restNum--;
        arr.push(amount)
    }
    // 最后一人的
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(20, 20));