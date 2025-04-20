/*
131. 分割回文串
中等
相关标签
相关企业
给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 

提示：

1 <= s.length <= 16
s 仅由小写英文字母组成
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
};

/* 验证回文串 */
const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";
const str3 = " "

const str11 = 'aab'
const str12 = 'a'
const str13 = 'aabccbc'

const strCheck = (str) => {
    let strFiltered = str.replace(/\W/g, '').toLowerCase()
    let left = 0
    let right = strFiltered.length - 1
    while (left < right) {
        if (strFiltered[left] === strFiltered[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
    // return strFiltered
}

const checkByDaSheng = (str) => {
    let strNew = str.toLowerCase().replace(/\W/g, "");
    let left = 0;
    let right = strNew.length - 1;
    while(left <= right) {
        if (strNew[left] !== strNew[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

const res1 = strCheck(str1);
console.log('res1', res1);
const res2 = strCheck(str2);
console.log('res2', res2);
const res3 = strCheck(str3);
console.log('res3', res3);


/* /验证回文串 */

const partition_250417_1 = (str) => {
    let resArr = []
    let path = []
    const dfs = (indexStart) => {
        if (indexStart >= str.length) {
            resArr.push(path.slice(0))
            return
        }
        for (let i = indexStart; i < str.length; i++) {
            let strPartition = str.slice(indexStart, i + 1)
            // console.log('strPartition', strPartition)
            // debugger;
            if (strCheck(strPartition)) {
                path.push(strPartition)
            } else {
                continue
            }
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return resArr
}

const partition_250417_2 = (str) => {
    let resArr = []
    let path = []
    const dfs = (indexStart) => {
        debugger;
        if (indexStart >= str.length) {
            resArr.push(path.slice(0))
            return
        }
        for (let i = indexStart; i < str.length; i++) {
            let strPartition = str.slice(indexStart, i + 1)
            // console.log('strPartition', strPartition)
            // debugger;
            if (strCheck(strPartition)) {
                path.push(strPartition)
                dfs(i + 1)
                path.pop()
            } else {
                continue
            }
            
        }
    }
    dfs(0)
    return resArr
}

// const res12 = partition_250417_1(str11);
// console.log('res12', res12);
// const res22 = partition_250417_1(str12);
// console.log('res22', res22);


const res13 = partition_250417_2(str11);
console.log('res13', res13);
const res23 = partition_250417_2(str13);
console.log('res23', res23);