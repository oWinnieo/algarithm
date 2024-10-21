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