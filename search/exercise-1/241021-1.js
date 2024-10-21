const getArrFromRange = (arr) => {
    const range = arr; // eg. [1, 10]
    let arrRes = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        arrRes.push(i);
    }
    return arrRes
}

const arr1 = getArrFromRange([1, 10])
console.log('arr1', arr1);

const findAreaNoRepeat1 = (arrOfArea) => {
    let arrOfArrFromArea = []
    for (let i = 0; i < arrOfArea.length; i++) {
        let arrTemp = getArrFromRange(arrOfArea[i]);
        arrTemp.forEach(item => {
            arrOfArrFromArea.push(item)
        })
        
    }
    let arrOfAll = Array.from(new Set(arrOfArrFromArea));
    return arrOfArrFromArea
}

const resEg = findAreaNoRepeat1([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log('resEg', resEg)

const findAreaNoRepeat = (arrOfArea) => {
    let arrSorted = JSON.parse(JSON.stringify(arrOfArea.sort((a, b) => (a[0] - b[0]))));
    // let itemStart = arrSorted.shift();
    let arrNew = [];
    arrNew.push(arrSorted.shift());
    // // for (let i = 0; i < arrSorted.length; i++) {

    // // }
    while (arrSorted.length) {
        let areaAim = arrSorted.shift();
        console.log('arrSorted', arrSorted, 'arrSorted.length', arrSorted.length)
        if (arrNew[arrNew.length - 1][1] >= areaAim[0]) {
            let areaNew = [arrNew[arrNew.length - 1][0], areaAim[1]]
            arrNew.pop();
            arrNew.push(areaNew);
        } else {
            arrNew.push(areaAim)
        }
    }
    
    return arrNew
}

const res = findAreaNoRepeat([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log('res', res);
const res1 = findAreaNoRepeat([[1, 4], [4, 5]]);
console.log('res1', res1)

