// const max_burger = (b1, b2, total_time) => {
//     if (total_time === 0) return 0;
//     if (total_time < 0) return -1;
//     const choice1 = max_burger(b1, b2, total_time - b1);
//     const choice2 = max_burger(b1, b2, total_time - b2);
//     if (total_time === -1 && total_time === -1) {
//         return -1
//     } else {
//         return Math.max(choice1, choice2) + 1
//     }
// }


const maxBurger = (b1, b2, total_time, calculated) => {
    if (total_time === 0) return 0;
    if (total_time < 0) return -1;
    const keyNeeded = `${b1}${b2}${total_time}`;
    const recordExit = calculated.get(keyNeeded);
    if (recordExit) {
        return recordExit;
    }
    const c1 = maxBurger(b1, b2, total_time - b1, calculated);
    const c2 = maxBurger(b1, b2, total_time - b2, calculated);

    if (c1 === -1 && c2 === -1) {
        return -1;
    } else {
        const resNeeded = Math.max(c1, c2) + 1;
        calculated.set(keyNeeded, resNeeded);
        debugger;
        return resNeeded
    }
}

const burger = (b1, b2, total_time) => {
    const calculated = new Map();
    const timeBefore = +new Date();
    const resTemp = maxBurger(b1, b2, total_time, calculated)
    const timeAfter = +new Date();
    const timeCost = timeAfter - timeBefore;
    console.log('timeCost', timeCost, 'resTemp', resTemp)
    return resTemp
}

const res = burger(2, 4, 60);