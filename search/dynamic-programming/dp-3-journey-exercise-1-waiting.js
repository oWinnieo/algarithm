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
        time: 0.5,
        score: 7
    },
    p2: {
        time: 0.5,
        score: 6
    },
    p3: {
        time: 1,
        score: 9
    },
    p4: {
        time: 2,
        score: 7
    },
    p5: {
        time: 0.5,
        score: 8
    }
}
const totalTime = 2
const wtestC = 0;


const maxScore = (list, totalTime, path) => {
    console.log('--->>> totalTime', totalTime);
    if (totalTime === 0) return 0;
    if (totalTime < 0) return -1;
    if (list.length === 1) {
        console.log('if 1')
        return list[0].score
    }
    const scoreObj = {}
    Object.keys(list).forEach(key => {
        console.log('key', key)
        scoreObj[key] = 0;
    })
    // if (list.length === 1) {
    //     return list[0].score
    // }
    while(list.length) {
        list.sort((a, b) => b.score - a.score);
        const itemTarget = list.shift();
        for (i = 0; i < list.length; i++) {
            const scoreNew = itemTarget.score + maxScore(list, totalTime - itemTarget.time, path)
            if (scoreNew > scoreObj[itemTarget]) {
                // path.set(itemTarget.key, itemTarget.score)
                scoreObj[itemTarget] = scoreNew
            }
        }
    }
    return scoreObj
}
const finding = (list, totalTime) => {
    const path = new Map()
    let listTemp = Object.keys(list).map(key => {
        return {
            key,
            time: list[key].time,
            score: list[key].score
        }
    });
    // listTemp.map(item)
    const res = maxScore(listTemp, totalTime, path);
    // console.log('res', res1)
    return res
}

const res1 = finding(list, totalTime)
console.log('res1', res1, 'list', list);