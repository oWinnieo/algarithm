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
        time: 1, // 0.5,
        score: 7
    },
    p2: {
        time: 2, // 0.5,
        score: 8, // 6
    },
    p3: {
        time: 3, // 1,
        score: 9
    },
    p4: {
        time: 1, // 2,
        score: 6, // 7
    },
    // p5: {
    //     time: 0.5,
    //     score: 8
    // }
}
const totalTime = 4
const wtestC = 0;


const maxScore = (list, totalTime, path) => {
    console.log('--->>> totalTime', totalTime, 'list', list);
    // const scoreObj = Array.from({length: totalTime}, () => 0)
    /* wtest */
    const scoreObj = {}
    Object.keys(list).forEach(key => {
        console.log('key', key)
        scoreObj[list[key].name] = 0;
    })
    /* /wtest */
    const nodes = Object.keys(scoreObj)
    console.log('scoreObj', scoreObj, 'nodes', nodes)

    for (let i = 0; i < list.length; i++) {
        console.log('i', i)
        debugger;
        while (nodes.length) {
            nodes.sort((a, b) => scoreObj[b] - scoreObj[a]);
            let nodeTarget = nodes.shift();
            let scoreNew = list[nodeTarget].score + score
            scoreObj[nodeTarget] + maxScore(list)
        }
        // for (let j = totalTime; j >= list[i].time; j--) {
        //     scoreObj[j] = Math.max(scoreObj[j], scoreObj[j - list[i].time] + list[i].score)
        //     console.log({i, j}, 'scoreObj', scoreObj)

        // }
    }

    // while(list.length) {
    //     list.sort((a, b) => b.score - a.score);
    //     const itemTarget = list.shift();
    //     for (i = 0; i < list.length; i++) {
    //         const scoreNew = itemTarget.score + maxScore(list, totalTime - itemTarget.time, path)
    //         if (scoreNew > scoreObj[itemTarget]) {
    //             // path.set(itemTarget.key, itemTarget.score)
    //             scoreObj[itemTarget] = scoreNew
    //         }
    //     }
    // }
    return scoreObj[totalTime]
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

const res1 = maximizeValue(attractions, totalTime)
console.log('res1', res1, 'list', attractions);
