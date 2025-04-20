/*
93. 复原 IP 地址
中等
相关标签
相关企业
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

1 <= s.length <= 20
s 仅由数字组成
*/

const str1 = '25525511135'
const str2 = '0000'
const str3 = '101023'

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
};

const ipAddress_250417_1 = (str) => {
    let resArr = []
    let path = []
    const dfs = (indexStart) => {
        if (path.length >= 5) return
        if (indexStart > str.length - 1) {
            if (path.length === 4 ) resArr.push(path.slice(0))
            return
        }
        for (let i = indexStart; i < str.length; i++) {
            let ipRemainStr = str.slice(i + 1)
            // console.log('ipRemainStr', ipRemainStr, ipRemainStr.startsWith('0'), 'num', Number(ipRemainStr))
            if (ipRemainStr.length > (4 - path.length) * 3
                || (path.length >= 4 && ipRemainStr.length > 0)) continue
            let ipStr = str.slice(indexStart, i + 1)
            let ipNum = Number(ipStr)
            if (path.length >= 5
                || ipNum < 0
                || ipNum > 255
                || (ipStr.startsWith('0') && Number(ipStr.slice(1)) !== 0)
            ) continue
            path.push(ipNum)
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return resArr
}

const res1 = ipAddress_250417_1(str1)
console.log('res1', res1)
const res2 = ipAddress_250417_1(str2)
console.log('res2', res2)
const res3 = ipAddress_250417_1(str3)
console.log('res3', res3)
