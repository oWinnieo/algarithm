const arrData = [1, 2, 3, 4, 5, 6];
const sum1 = (arr) => {
    let total = 0;
    // for (let x in arr) { // wtest key
    //     total += Number(x)
    // }
    let arrTemp = JSON.parse(JSON.stringify(arrData))
    for (let x of arrTemp) { // wtest value
        total += x
    }
    return total
}

const res1 = sum1(arrData);
console.log('res1', res1);

const sum2 = (arr) => {
    if (arr.length > 1) {
        let x0 = arr.splice(0, 1);
        // console.log('x0', x0, 'arr', arr);
        return Number(x0) + sum2(arr);
    } else {
        return Number(arr[0]);
    }
}
let arrTemp2 = JSON.parse(JSON.stringify(arrData))
const res2 = sum2(arrTemp2);
console.log('res2', res2)


const sum3 = (arr) => {
    console.log('arr.length', arr.length);
    if (arrTemp3.length <= 1) {
        return 1;
    } else {
        arr.pop();
        return 1 + sum3(arr);
    }
    // // if (arrTemp3.length > 1) {
    // //     arrTemp3.splice(0, 1);
    // //     return 1 + sum3(arrTemp3)
    // // } else {
    // //     return 1
    // // }
}
let arrTemp3 = JSON.parse(JSON.stringify(arrData))
const res3 = sum3(arrTemp3);
console.log('res3', res3);