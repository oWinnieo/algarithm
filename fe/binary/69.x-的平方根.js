/*
69. x 的平方根 
简单

提示
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

示例 1：

输入：x = 4
输出：2
示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

提示：

0 <= x <= 231 - 1
*/
/*
参考: https://leetcode.cn/problems/sqrtx/solutions/1185134/li-yong-er-fen-fa-qiu-ping-fang-gen-si-l-r847/
解题思路
整数x的平方根一定小于或等于x
除0之外的所有整数的平方根都大于或等于1
整数x的平方根一定是在1到x的范围内，取这个范围内的中间数字mid，并判断mid的平方是否小于或等于x，如果mid的平方小于x
那么接着判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
然后在相应的范围内重复这个过程，总是取出位于范围中间的mid

作者：花花
链接：https://leetcode.cn/problems/sqrtx/solutions/1185134/li-yong-er-fen-fa-qiu-ping-fang-gen-si-l-r847/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

const mySqrt = (x) => {
    let left = 0;
    let right = x;
    let mid = 0;
    while (left <= right) {
        mid = Math.ceil((left + right) / 2);
        if (mid * mid <= x && ((mid + 1) * (mid + 1) > x)) {
            return mid;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 0
}

const res1 = mySqrt(4)
console.log('res1', res1)

const res2 = mySqrt(8)
console.log('res2', res2)