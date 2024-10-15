const arrData = [12, 52, 33, 214, 315, 96];

let arrTemp = JSON.parse(JSON.stringify(arrData))
const findBiggest = (arr) => {
    if (arr.length === 2) {
        return Math.max(arr[0], arr[1]);
    } else {
        let v0 = arr.pop();
        return Math.max(v0, findBiggest(arr))
    }    
}

const res = findBiggest(arrTemp);
console.log('res', res);

let arrTemp2 = JSON.parse(JSON.stringify(arrData))
// let arrTemp2 = [33, 22];
const qSortBackup1 = (arr) => {
    if (arr.length < 2) {
        return arr
    } else {
        // const item = arr[Math.ceil((arr.length - 1) / 2)];
        const item = arr[0]
        const arrSmall = []
        const arrBig = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= item) {
                arrSmall.push(arr[i])
            } else {
                arrBig.push(arr[i])
            }
        }
        console.log('item', item, 'arrSmall', arrSmall, 'arrBig', arrBig);
        debugger;
        return qSortBackup1(arrSmall).concat(item, qSortBackup1(arrBig));
        // const wtest1 = qSort(arrSmall);
        // debugger;
        // const dArrSmall = arrSmall.length > 2 ? qSort(arrSmall) : arrSmall
        // const dArrBig = arrBig.length > 2 ? qSort(arrBig): arrBig;
        // return [...qSort(arrSmall), ...qSort(arrBig)]
        // console.log('dArrSmall', dArrSmall, 'dArrBig', dArrBig)
        // return [...qSort(arrSmall), item, ...qSort(arrBig)]
    }
}
const qSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let item = arr[0];
    let arrSmall = [];
    let arrBig = [];
    for (let k = 1; k < arr.length; k++) {
        if (arr[k] < item) {
            arrSmall.push(arr[k])
        } else {
            arrBig.push(arr[k])
        }
    }
    // return qSort(arrSmall).concat(item, qSort(arrBig));
    return [...qSort(arrSmall), item, ...qSort(arrBig)];
}

const resQSort = qSort(arrTemp2);
console.log('resQSort aha', resQSort);

let arrTemp3 = JSON.parse(JSON.stringify(arrData))
function qSort3 (arr) {
    if (arr.length <= 1) {
        return arr
    } else {
        let item = arr[0];
        let smallArr = [];
        let bigArr = [];
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < item) {
                smallArr.push(arr[j])
            } else {
                bigArr.push(arr[j])
            }
        }
        return qSort3(smallArr).concat(item, qSort3(bigArr))
    }
}
// const resQSort3 = qSort3(arrTemp3);
// console.log('resQSort3', resQSort3);