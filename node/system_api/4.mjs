import fs from 'fs'
// 同步 线程阻塞 
const buf = fs.readFileSync('./test.txt')
console.log(buf, buf.length);
buf.write('gg')
console.log(buf.toString())