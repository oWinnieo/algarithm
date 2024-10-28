/**
 * 假设你要去伦敦度假，假期两天，但你想去游览的地方很多。
 * 你没法前往每个地方游览，因此你列个单子。
 * 名胜：
 * - 威斯敏斯特教堂：0.5天，7分
 * - 环球剧场：0.5天，6分
 * - 英国国家美术馆：1天，9分
 * - 大英博物馆：2天，9分
 * - 圣保罗大教堂：0.5天，8分
 * 
 */

const list = {
    p1: {
        name: 'p1',
        time: 0.5, // 1, // 0.5,
        score: 7
    },
    p2: {
        name: 'p2',
        time: 0.5, // 2, // 0.5,
        score: 8, // 6
    },
    p3: {
        name: 'p3',
        time: 1, // 3, // 1,
        score: 9
    },
    p4: {
        name: 'p4',
        time: 2, // 1, // 2,
        score: 6, // 7
    },
    // p5: {
    //     time: 0.5,
    //     score: 8
    // }
}
const totalTime = 2
const wtestC = 0;


const maxScore = (list, totalTime, timeUnit, path) => {
    console.log('--->>> totalTime', totalTime, 'list', list);
    /* wtest */
    const scoreObjByTime = {}
    for (let t = timeUnit; t <= totalTime; t=t+timeUnit) {
        scoreObjByTime[t] = 0;
    }
    /* /wtest */
    for (let i = 0; i < list.length; i++) {
        let totalTimeTemp = totalTime
        while (totalTimeTemp > 0) {
            let scoreNew = scoreObjByTime[totalTimeTemp - list[i].time] ?
                scoreObjByTime[totalTimeTemp - list[i].time] + list[i].score :
                list[i].score
            if (scoreNew > scoreObjByTime[totalTimeTemp] || !scoreObjByTime[totalTimeTemp]) {
                scoreObjByTime[totalTimeTemp] = scoreNew
            }
            totalTimeTemp = totalTimeTemp - timeUnit
        }
    }
    console.log('scoreObjByTime', scoreObjByTime)
    // debugger;
    return Object.values(scoreObjByTime).sort((a, b) => b - a)[0]
}
// const finding = (list, totalTime) => {
//     const path = new Map()
//     let listTemp = Object.keys(list).map(key => {
//         return {
//             key,
//             time: list[key].time, // * 2,
//             score: list[key].score
//         }
//     });
//     // listTemp.map(item)
//     let daysAvailable = 4
//     const res = maxScore(listTemp, daysAvailable, path);
//     // console.log('res', res1)
//     return res
// }

const attractions = [
    { name: 'gugong', time: 1, score: 7 },
    { name: 'yiheyuan', time: 2, score: 8 },
    { name: 'changcheng', time: 3, score: 9 },
    { name: 'tiantan', time: 1, score: 6 }
];
function maximizeValue(attractions, days) {
    
    const n = attractions.length;
    const dp = Array.from({ length: days + 1 }, () => 0);

    for (let i = 0; i < n; i++) {
        console.log('attractions --->>>', attractions)
        for (let j = days; j >= attractions[i].time; j--) {
            console.log('j', j)
            debugger;
            dp[j] = Math.max(dp[j], dp[j - attractions[i].time] + attractions[i].score);
        }
    }

    return dp[days];
}

const list2Arr = Object.keys(list).map(key => {
    return {
        name: key,
        time: list[key].time,
        score: list[key].score
    }
})
const res1 = maxScore(attractions, 4, 1)
console.log('res1', res1, 'list', list);
