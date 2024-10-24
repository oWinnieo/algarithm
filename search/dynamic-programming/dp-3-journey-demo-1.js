function maximizeValue(days) {
    const attractions = [
        { name: '故宫', time: 1, score: 7 },
        { name: '颐和园', time: 2, score: 8 },
        { name: '长城', time: 3, score: 9 },
        { name: '天坛', time: 1, score: 6 }
    ];

    const n = attractions.length;
    const dp = Array.from({ length: days + 1 }, () => 0);

    for (let i = 0; i < n; i++) {
        for (let j = days; j >= attractions[i].time; j--) {
            dp[j] = Math.max(dp[j], dp[j - attractions[i].time] + attractions[i].score);
        }
    }

    return dp[days];
}

const daysAvailable = 4;
const maxScore = maximizeValue(daysAvailable);

// console.log(`在${daysAvailable}天内，能够获得的最大评分为：${maxScore}`);

console.log('maxScore', maxScore);
