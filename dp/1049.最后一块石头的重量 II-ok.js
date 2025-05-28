/*
1049. 最后一块石头的重量 II
中等
相关标签
相关企业
提示
有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

 

示例 1：

输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
示例 2：

输入：stones = [31,26,33,21,40]
输出：5
 

提示：

1 <= stones.length <= 30
1 <= stones[i] <= 100
*/
const stones1 = [2,7,4,1,8,1]
const stones2 = [31,26,33,21,40]
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    
};

const lastStone_250527_1 = (stones) => {
    const sum = stones.reduce((a, b) => a + b)
    const halfSum = Math.floor(sum / 2)
    // console.log('halfSum', halfSum)
    const dp = Array.from({length: halfSum + 1}, () => 0)
    // console.log('dp', dp)
    for (let i = 0; i < stones.length; i++) {
        for (let j = halfSum; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }
    console.log('dp', dp, 'sum', sum)
    return sum - dp[halfSum] * 2
}

const res1 = lastStone_250527_1(stones1)
console.log('res1 lastStone_250527_1', res1)
const res2 = lastStone_250527_1(stones2)
console.log('res2', res2)