/*
77. 组合
中等
相关标签
相关企业
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

 

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]
 

提示：

1 <= n <= 20
1 <= k <= n
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
};

const combine_250410_1 = (n, k) => {
  let resArr = []
  let path = []
  const dfs = (n, k, indexStart) => {
    debugger;
    if (path.length === k) {
      resArr.push(path.slice(0))
      return
    }
    debugger;
    for (let i = indexStart; i <= n; i++) {
      path.push(i)
      dfs(n, k, i + 1)
      path.pop()
    }
  }
  dfs(n, k, 1)
  return resArr
}

const combine_250410_2 = (n, k) => {
  let resArr = []
  let path = []
  const dfs = (indexStart) => {
    if (path.length === k) {
      resArr.push(path.slice(0))
      return
    }
    for (let i = indexStart; i <= n; i++) {
      path.push(i)
      dfs(i + 1)
      path.pop()
    }
  }
  dfs(1)
  return resArr
}

const combine_250412_1 = (n, k) => {
  let resArr = []
  let path = []
  const dfs = (indexStart) => {
    if (n - (indexStart - 1) + path.length < k) {
      return
    }
    if (path.length >= k) {
      resArr.push(path.slice(0))
      return
    }
    for (let i = indexStart; i <= n; i++) {
      path.push(i)
      dfs(i + 1)
      path.pop()
    }
  }
  dfs(1)
  return resArr
}

const combine_250412_2 = (n, k) => {
  let resArr = []
  let path = []
  const dfs = (indexStart) => {
    if (path.length === k) {
      resArr.push(path.slice(0))
      return
    }
    for (let i = indexStart; i <= (n - (k - path.length) + 1); i++) {
      // for (let i = indexStart; i <= n; i++) {
      path.push(i)
      dfs(i + 1)
      path.pop()
    }
  }
  dfs(1)
  return resArr
}

const res1 = combine_250410_2(4, 2)
console.log('combine_250410_2 res1', res1)

const res2 = combine_250412_1(4, 2)
console.log('combine_250412_1 1 res2', res2)

const res3 = combine_250412_2(4, 2)
console.log('combine_250412_2 res3', res3)
