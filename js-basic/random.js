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
    /*
    详细分析
遍历方式：从数组的最后一个元素（索引为 arr.length - 1）开始，逐步向前遍历到索引为 1 的元素。
随机索引生成：对于当前索引 i，通过 Math.floor(Math.random() * (i + 1)) 生成一个范围在 [0, i] 的随机整数 j。
元素交换：将索引 i 和 j 对应的元素进行交换。
随机性分析
这种方式是标准的 Fisher - Yates 洗牌算法实现，它能保证每个元素出现在任何位置的概率是相等的，也就是说，数组的所有可能排列出现的概率都是均匀分布的，具有良好的随机性。
*/
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    /*
    详细分析
遍历方式：从数组的第一个元素（索引为 0）开始，依次向后遍历到索引为 arr.length - 2 的元素。
随机索引生成：对于当前索引 i，通过 Math.floor(Math.random() * (arr.length - i + 1)) 生成一个范围在 [0, arr.length - i] 的随机整数 j。
元素交换：将索引 i 和 j 对应的元素进行交换。
随机性分析
这种从前往后遍历的方式无法保证数组的所有可能排列出现的概率是均匀的。因为在遍历过程中，前面的元素被交换到后面位置的概率和后面元素被交换到前面位置的概率在不同阶段有所不同，会导致某些排列出现的概率更高，从而破坏了随机性。
*/
    /* wtest *
    for (let i = 0; i < arr.length - 1; i++) {
        let j = Math.floor(Math.random() * (arr.length - i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    /* /wtest */
    return arr
}



// const arrRandom0 = setRandomArray0(0, 12, 20)
// console.log('arrRandom0', arrRandom0, 'length', arrRandom0.length)

// const arrRandom1 = setRandomArray1(0, 12, 20)
// console.log('arrRandom1', arrRandom1, 'length', arrRandom1.length)

// const arrRandom2 = setRandomArray2(0, 12, 20, 6)
// console.log('arrRandom2', arrRandom2, 'length', arrRandom2.length)

// const numsSort_250331_0 = setRandomArray2(1, 20, 10, 0)
const numsSort_250331_0 = [10, 18, 13, 18, 14, 16, 9, 18, 2, 15]

const numsSort_250331_1 = [10, 16, 1, 13, 19, 8, 14, 2, 12, 11]