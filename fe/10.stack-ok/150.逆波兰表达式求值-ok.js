/*
150. 逆波兰表达式求值
中等
相关标签
相关企业
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

注意：

有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。


示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
示例 2：

输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
示例 3：

输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

提示：

1 <= tokens.length <= 104
tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数
 

逆波兰表达式：

逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
逆波兰表达式主要有以下两个优点：

去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中
*/
let tokens1 = ["2","1","+","3","*"] // 9
let tokens2 = ["4","13","5","/","+"] // 6.6
let tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] // 
// 10, 6, 12, -11, *, /, *, 17, +, 5, +
// 10, 6, -132, /, *, 17, +, 5, +
// 10, -0.0454, *, 17, +, 5, +
// 0, 17, +, 5, +
// 17, 5, +
// 22
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
};

// [\+\-\*\/]
// (\+|\-|\*|\/)
// /^[+\-*/]$/
const evalRPN_250428_1 = (tokens) => {
  let stack = []
  let operatorRegExp = /^(\+|\-|\*|\/)$/
  // let wtest_d1 = '+'
  // let wtest_d2 = '-'
  // operatorRegExp.test(wtest_d1)
  // operatorRegExp.test(wtest_d2)
  // debugger;
  for (let i = 0; i < tokens.length; i++) {
    if (operatorRegExp.test(tokens[i])) {
      let nums2 = stack.pop()
      let nums1 = stack.pop()
      let res = 0
      switch (tokens[i]) {
        case '+':
          debugger;
          // res = Math.floor(nums1 + nums2)
          res = (nums1 + nums2) | 0
          break;
        case '-':
          debugger;
          // res = Math.floor(nums1 - nums2)
          res = (nums1 - nums2) | 0
          break;
        case '*':
          debugger;
          // res = Math.floor(nums1 * nums2)
          res = (nums1 * nums2) | 0
          break;
        case '/':
          debugger;
          // res = Math.floor(nums1 / nums2)
          res = (nums1 / nums2) | 0
          break;
      }
      // stack.push(res)
      // stack.push(parseInt(res))
      // res = res | 0
      stack.push(res)
      debugger;
    } else {
      stack.push(Number(tokens[i]))
    }
  }
  return stack.pop()
}

// const res1 = evalRPN_250428_1(tokens1)
// console.log('evalRPN_250428_1 res1', res1)
// const res2 = evalRPN_250428_1(tokens2)
// console.log('evalRPN_250428_1 res2', res2)
// let wtest_1 = 6 / (-132)
// console.log('wtest_1', wtest_1, 'floor', Math.floor(wtest_1), 'ceil', Math.ceil(wtest_1))
const res3 = evalRPN_250428_1(tokens3)
console.log('evalRPN_250428_1 res3', res3)

