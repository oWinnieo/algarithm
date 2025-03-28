const setRandomArray0 = (m, n, count) => {
    let arr = []
    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (n - m) + m)
        arr.push(num)
    }
    return arr
}

const setRandomArray1 = (m, n, count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (n - m) + m))
    // return Array.from({ length: count }, () => Math.floor(Math.random() * 101));
}

const setRandomArray2 = (m, n, lenOfArr, countOfZero) => {
    let arr = new Array(countOfZero).fill(0)
    while (arr.length < lenOfArr) {
        let num = Math.floor(Math.random() * (n - m) + m)
        arr.push(num)
    }
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// const arrRandom0 = setRandomArray0(0, 12, 20)
// console.log('arrRandom0', arrRandom0, 'length', arrRandom0.length)

// const arrRandom1 = setRandomArray1(0, 12, 20)
// console.log('arrRandom1', arrRandom1, 'length', arrRandom1.length)

// const arrRandom2 = setRandomArray2(0, 12, 20, 6)
// console.log('arrRandom2', arrRandom2, 'length', arrRandom2.length)
