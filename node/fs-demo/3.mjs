import fs from 'fs'
const imgBuf = fs.readFileSync('./logo.png')
console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length)

// 写入到新文件
fs.writeFileSync('newLogo.png', imgBuf, 'binary')