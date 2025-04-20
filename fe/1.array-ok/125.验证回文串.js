/*
125. 验证回文串
简单
如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

示例 1：

输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。
示例 2：

输入：s = "race a car"
输出：false
解释："raceacar" 不是回文串。
示例 3：

输入：s = " "
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。

提示：

1 <= s.length <= 2 * 105
s 仅由可打印的 ASCII 字符组成
*/
const checkStr = (str) => {
    
    let strNew = str.toLowerCase().replace(/\W/g, "");
    console.log('strNew', strNew);
    let count = Math.ceil((strNew.length - 1) / 2);
    let resCount = 0;
    debugger;
    for (let i = 0; i <= count; i++) {
        if (strNew[i] !== strNew[strNew.length - 1 - i]) {
            resCount = i
            break;
        }
    }
    return resCount === 0 ? true : false
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

const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";
const str3 = " "

const res1 = checkByDaSheng(str1);
console.log('res1', res1);
const res2 = checkByDaSheng(str2);
console.log('res2', res2);
const res3 = checkByDaSheng(str3);
console.log('res3', res3);

const isPalindrome_250325_1 = (str) => {
    let strFormatted = str.toLowerCase().replace(/\W/g, '')
    let left = 0;
    let right = strFormatted.length - 1
    while (left <= right) {
        if (strFormatted[left] !== strFormatted[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

const res11 = isPalindrome_250325_1(str1);
console.log('res11', res11);
const res21 = isPalindrome_250325_1(str2);
console.log('res21', res21);
const res31 = isPalindrome_250325_1(str3);
console.log('res31', res31);