

const findAreaNoRepeat = (arrOfArea) => {
    let arrSorted = JSON.parse(JSON.stringify(arrOfArea.sort((a, b) => (a[0] - b[0]))));

    let arrNew = [];
    arrNew.push(arrSorted.shift());

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
const res2 = findAreaNoRepeat([[1, 3], [2, 6], [6, 10], [15, 18]]);
console.log('res2', res2)

