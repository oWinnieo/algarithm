
const qSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let itemTarget = arr[0]
    let arrSmall = []
    let arrBig = []
    for (let i = 1; i < arr.length; i++) { // let i = >>> 1 <<<
        if (arr[i] < itemTarget) {
            arrSmall.push(arr[i])
        } else {
            arrBig.push(arr[i])
        }
    }
    return [...qSort(arrSmall), itemTarget, ...qSort(arrBig)];
}

const arrData = [12, 52, 33, 214, 315, 96];
const res = qSort(arrData)
console.log('res', res)