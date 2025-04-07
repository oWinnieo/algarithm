/*
【归并排序动画演示】https://www.bilibili.com/video/BV1BB4y117hR?vd_source=4e03c23dad636a1f83555277f3900371
*/

const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let arr = []
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex])
            leftIndex++
        } else {
            arr.push(right[rightIndex])
            rightIndex++
        }
    }
    while (leftIndex < left.length) {
        arr.push(left[leftIndex])
        leftIndex++
    }
    while (rightIndex < right.length) {
        arr.push(right[rightIndex])
        rightIndex++
    }
    return arr
}

const mergeSort_250402_1 = (nums) => {
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)

    let leftSorted = mergeSort_250402_1(left)
    let rightSorted = mergeSort_250402_1(right)

    return merge(leftSorted, rightSorted)
}


const merge_250407_1 = (arrL, arrR) => {
    let indexL = 0;
    let indexR = 0;
    let arr = []
    while (indexL < arrL.length && indexR < arrR.length) {
        if (arrL[indexL] < arrR[indexR]) {
            arr.push(arrL[indexL])
            indexL++
        } else {
            arr.push(arrR[indexR])
            indexR++
        }
    }
    while (indexL < arrL.length) {
        arr.push(arrL[indexL])
        indexL++
    }
    while (indexR < arrR.length) {
        arr.push(arrR[indexR])
        indexR++
    }
    return arr
}

const merge_250407_2 = (arrL, arrR) => {
    let indexL = 0
    let indexR = 0
    let arr = []
    while (indexL < arrL.length && indexR < arrR.length) {
        if (arrL[indexL] < arrR[indexR]) {
            arr.push(arrL[indexL])
            indexL++
        } else {
            arr.push(arrR[indexR])
            indexR++
        }
    }
    while (indexL < arrL.length) {
        arr.push(arrL[indexL])
        indexL++
    }
    while (indexR < arrR.length) {
        arr.push(arrR[indexR])
        indexR++
    }
    return arr
}

const mergeSort_250407_1 = (nums) => {
    // if (nums.length <= 1) return nums
    // let mid = Math.floor(nums.length / 2)
    // let arrLeft = nums.slice(0, mid)
    // let arrRight = nums.slice(mid)
    // let arrLeftSorted = mergeSort_250407_1(arrLeft)
    // let arrRightSorted = mergeSort_250407_1(arrRight)
    // return merge(arrLeftSorted, arrRightSorted)
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let arrL = nums.slice(0, mid)
    let arrR = nums.slice(mid)
    let arrLSorted = mergeSort_250407_1(arrL)
    let arrRSorted = mergeSort_250407_1(arrR)
    return merge_250407_1(arrLSorted, arrRSorted)
}

const res1_5 = mergeSort_250407_1(numsSort_250331_1)
console.log('mergeSort_250407_1 res1_5', res1_5)