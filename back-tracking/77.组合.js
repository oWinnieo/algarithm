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
/*
讲解:【带你学透回溯算法-组合问题的剪枝操作（对应力扣题目：77.组合）| 回溯法精讲！-哔哩哔哩】 https://b23.tv/OIcRty1
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combineOri = function(n, k) {
    
};

let result = []
const backtracking = (n, k) => {
    // let path = Array.from({length: k}, (_, i) => i + 1)
    const helper = (startIndex, path) => {
        // console.log('path in bt', path)
        if (path.length === k) {
            result.push(path.slice())
            // console.log('result', result)
            debugger;
            return
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i)
            // console.log('path push', path)
            debugger;
            helper(i + 1, path)
            path.pop()
            // console.log('path pop', path)
            debugger;
        }
        
    }
    helper(1, [])
    return result
    
}

const combine = (n, k) => {
    const res = [];
  
    const helper = (startIndex, path) => { //startIndex表示搜索的起点位置 path是每条分支的一个组合）
      if (path.length == k) {
        res.push(path.slice());       //需要拷贝一份 避免受其他分支的影响
        return;                       
      }
      for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {//剪枝
        // wtest n = 10; k = 3; path.len 1, 10-(3-1)+1
        // wtest n = 15; k = 5; path.len 2, 15-(5-2)+1
        // wtest n = 15; k = 5; path.len 1, 15-(5-1)+1
        // wtest n - (k - path.len) + 1
        // wtest 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
        path.push(i);                    //加入path
        helper(i + 1, path);             //下一层递归
        path.pop();                      //回溯状态
      }
    };
  
    helper(1, []); //递归入口
    return res;
  }
  
//   作者：晨
//   链接：https://leetcode.cn/problems/combinations/solutions/1118933/77-zu-he-by-chen-wei-f-sf3d/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const bt_exercise1 = (n, k) => {
    let res = []
    const helper = (startIndex, path) => {
        if (path.length === k) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i)
            helper(i + 1, path)
            path.pop()
        }
    }
    helper(1, [])
    return res
}

const n = 4;
const k = 2;

const res1 = combine(n, k);
console.log('res1', res1)

const res2 = backtracking(n, k);
console.log('res2', res2)

const res3 = bt_exercise1(n, k);
console.log('res3', res3)
