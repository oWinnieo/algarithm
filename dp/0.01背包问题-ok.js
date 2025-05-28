/*
01背包
【动态规划中的01背包问题你清楚嘛？搞懂它再刷题！【渡一教育】】https://www.bilibili.com/video/BV1qy4y1F7MR?vd_source=4e03c23dad636a1f83555277f3900371



dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
空间O(n*bagWeight)

dp[i] -> next
dp[i-1] -> result

next[j] = Math.max(result[j-weight[i]] + result[j])
空间O(bagWeight)
*/

const package1 = (bagWeight, value, weight) => {
    let result = []
    for (let j = 0; j <= bagWeight; j++) {
        result[j] = j >= weight[0] ? value[0] : 0;
    }
    for (let i = 1; i < value.length; i++) {
        const next = []
        for (let j = 0; j <= bagWeight; j++) {
            next[j] = j >= weight[i] ? Math.max(result[j - weight[i]] + value[i], result[j]) : result[j]
        }
        result = next
    }
    return result[bagWeight]
}
const package2 = (bagWeight, value, weight) => {
    // let result = []
    let dp = []
    for (let j = 0; j <= bagWeight; j++) {
        dp[j] = j >= weight[0] ? value[0] : 0;
    }
    for (let i = 0; i < value.length; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j - weight[i]] + value[i], dp[j])
        //     next[j] = j >= weight[i] ? Math.max(result[j - weight[i]] + value[i], result[j]) : result[j]
        }
    }
    return dp[bagWeight]
}

function package(bagWeight, value, weight) {
    let result = []
    for (let j = 0; j <= bagWeight; j++) {
        result[j] = j >= weight[0] ? value[0] : 0;
    }
    for (let i = 1; i < value.length; i++) {
        const next = []
        for (let j = 0; j <= bagWeight; j++) {
            if (j >= weight[i]) {
                next[j] = Math.max(
                    value[i] + result[j - weight[i]],
                    result[j]
                )
            } else {
                next[j] = result[j]
            }
        }
        result = next
    }
    return result[bagWeight]
}

const result = package2(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3])
console.log('result package22', result)

