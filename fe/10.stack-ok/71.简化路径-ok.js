/*
71. 简化路径
中等
相关标签
相关企业
给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为 更加简洁的规范路径。

在 Unix 风格的文件系统中规则如下：

一个点 '.' 表示当前目录本身。
此外，两个点 '..' 表示将目录切换到上一级（指向父目录）。
任意多个连续的斜杠（即，'//' 或 '///'）都被视为单个斜杠 '/'。
任何其他格式的点（例如，'...' 或 '....'）均被视为有效的文件/目录名称。
返回的 简化路径 必须遵循下述格式：

始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。

 

示例 1：

输入：path = "/home/"

输出："/home"

解释：

应删除尾随斜杠。

示例 2：

输入：path = "/home//foo/"

输出："/home/foo"

解释：

多个连续的斜杠被单个斜杠替换。

示例 3：

输入：path = "/home/user/Documents/../Pictures"

输出："/home/user/Pictures"

解释：

两个点 ".." 表示上一级目录（父目录）。

示例 4：

输入：path = "/../"

输出："/"

解释：

不可能从根目录上升一级目录。

示例 5：

输入：path = "/.../a/../b/c/../d/./"

输出："/.../b/d"

解释：

"..." 在这个问题中是一个合法的目录名。

 

提示：

1 <= path.length <= 3000
path 由英文字母，数字，'.'，'/' 或 '_' 组成。
path 是一个有效的 Unix 风格绝对路径。
*/
const path1 = "/home/"
const path2 = "/home//foo/"
// const path2 = "/home/./aa/..//foo/"
const path3 = "/home/user/Documents/../Pictures"
const path4 = "/../"
const path5 = "/.../a/../b/c/../d/./"

const path6 = '/a/./b/../../c/'
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
};

const popPartPath = (stack) => {
    // debugger;
    stack.pop() // pop the latest slash
    let strTar1 = stack.pop()
    let strArr1 = []
    while (strTar1 !== '/') {
        // debugger;
        strArr1.push(strTar1)
        strTar1 = stack.pop()
    }
    stack.push(strTar1)
    // debugger;
    return strArr1
}
const simplifyPath_250428_1 = (path) => {
    if (path.length <= 0) return false
    let stack = []
    let pathArr = path.split('')
    // debugger;
    // while (index < pathArr.length) {
    //     if (pathArr[index] === '/') {

    //     }
    // }
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === '/' && i > 0 && pathArr[i - 1] === '/') {
            continue
        } else {
            stack.push(pathArr[i])
            // debugger;
            if (pathArr[i] === '/' && stack.length > 1) {
                debugger;
                let strArr1 = popPartPath(stack)
                let str = strArr1.join('')
                // console.log('strArr1', strArr1, 'str', str)
                debugger;
                switch (str) {
                    case '.':
                        continue;
                    case '..':
                        // if (stack.length > 1) stack.pop() // pop the latest slash
                        if (stack.length > 1) popPartPath(stack)
                        break;
                    default:
                        while (strArr1.length) {
                            stack.push(strArr1.pop())
                        }
                        stack.push('/')
                }
            }
        }
    }
    if (stack.length > 1 && stack[stack.length - 1] === '/') {
        stack.length--
    }
    return stack.join('')
}

const simplifyPath_250429_1 = (path) => {
    if (path.length <= 0) return false
    let pathArr = path.split('')
    let stack = []
    let strArrTmp = []
    for (let i = 0; i < pathArr.length; i++) {
        let strCur = pathArr[i]
        if (strCur === '/' && i > 0 && pathArr[i - 1] === '/') {
            continue
        } else if (strCur !== '/') {
            stack.push(strCur)
        } else {
            
        }
        // while (strCur !== '/') {
        //     strArrTmp.push(strCur)
        //     strCur = pathArr[i]
        // }
    }
}

const simplifyPath_250505_1 = (path) => {
    const pathArr = path.split('/').filter(val => val !== '')
    // console.log('pathArr', pathArr)
    const stack = []
    for (let i = 0; i < pathArr.length; i++) {
        switch (pathArr[i]) {
            case '.':
                continue
            case '..':
                stack.pop()
                break;
            default:
                stack.push(pathArr[i])
                break;
        }
    }
    console.log('stack', stack)
    let res = stack.join('/')
    return '/' + res
}

// const res1 = simplifyPath_250428_1(path1)
// console.log('simplifyPath_250428_1 res1 /home: ', res1)
// const res2 = simplifyPath_250428_1(path2)
// console.log(' res2 /home/foo: ', res2)
// const res3 = simplifyPath_250428_1(path3)
// console.log(' res3 /home/user/Pictures: ', res3)
// const res4 = simplifyPath_250428_1(path4)
// console.log(' res4 /: ', res4)
// const res5 = simplifyPath_250428_1(path5)
// console.log(' res5 /.../b/d: ', res5)
// const res6 = simplifyPath_250428_1(path6)
// console.log(' res6 /c: ', res6)

const res1 = simplifyPath_250505_1(path1)
console.log('simplifyPath_250505_1 res1 /home: ', res1)
const res2 = simplifyPath_250505_1(path2)
console.log(' res2 /home/foo: ', res2)
const res3 = simplifyPath_250505_1(path3)
console.log(' res3 /home/user/Pictures: ', res3)
const res4 = simplifyPath_250505_1(path4)
console.log(' res4 /: ', res4)
const res5 = simplifyPath_250505_1(path5)
console.log(' res5 /.../b/d: ', res5)
const res6 = simplifyPath_250505_1(path6)
console.log(' res6 /c: ', res6)

// const arr = [1, 2, 3, 4, 5];
// const aaa = '123456'
// const result1 = aaa.slice(-3); 
// const result2 = aaa.slice(-3, -1); 
// const result3 = aaa.slice(0, -1); 
// console.log(result1); 
// console.log(result2);
// console.log(result3); 
