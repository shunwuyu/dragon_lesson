import path from 'path'

// console.log(path.join('a', 'b', 'c'))
// console.log(path.join(process.cwd(), '/hello', 'world'))
// // 绝对路径
// console.log(path.resolve('a', 'b', 'c'))
// console.log(path.resolve('/hello', 'world', './a', 'b'))

console.log('=== path.dirname ===')
console.log(path.dirname(process.cwd()))
console.log(path.dirname('/a/b/c'))

console.log('=== path.basename ===')
console.log(path.basename('a/b/c.js'))
console.log(path.basename('a/b/c.js', '.js'))
console.log(path.basename('a/b/c.js', 'js'))
console.log(path.basename('a/b/c.js', 's'))

console.log('=== path.extname ===')
console.log(path.extname('a/b/c.js'))
console.log(path.extname('a/b/c'))
console.log(path.extname('a/b/c.d.ts'))
console.log(path.extname('a/b/.npmrc'))

console.log('=== path.normalize ===')
console.log(path.normalize('a//b//c/d/e/..'))

console.log('=== path.parse ===')
console.log(path.parse('/home/user/dir/file.txt'))

const dir = 'users';
const file = 'index.html';

// 在 Unix 操作系统上输出：users/index.html
// 在 Windows 操作系统上输出：users\index.html
console.log(path.join(dir, file));