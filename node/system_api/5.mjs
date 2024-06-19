import fs from 'fs'

// fs.writeFileSync('./newTest.txt', 'newTest')
// status 
try{
    console.log(fs.statSync('./newTest2.txt'))
} catch(err) {
    console.log('文件不存在')
}

