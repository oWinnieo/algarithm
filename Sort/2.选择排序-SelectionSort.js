/*
【选择排序动画演示】https://www.bilibili.com/video/BV1qS4y1w7jM?vd_source=4e03c23dad636a1f83555277f3900371
*/
const selectionSort_250331_1 = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] > nums[j]) {
                minIndex = j
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
    return nums
}

const selectionSort_250331_2 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    console.log('numsNew', numsNew)
    for (let i = 0; i < numsNew.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < numsNew.length - 1; j++) {
            if (numsNew[minIndex] > numsNew[j]) {
                minIndex = j
            }
        }
        [numsNew[i], numsNew[minIndex]] = [numsNew[minIndex], numsNew[i]]
    }
    return numsNew
}

const selectionSort_250331_3 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    console.log('numsNew', numsNew)
    for (let i = 0; i < numsNew.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j <= numsNew.length - 1; j++) {
            if (numsNew[minIndex] > numsNew[j]) {
                minIndex = j
            }
        }
        [numsNew[i], numsNew[minIndex]] = [numsNew[minIndex], numsNew[i]]
    }
    return numsNew
}

const selectionSort_250407_1 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    for (let i = 0; i < numsNew.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < numsNew.length; j++) {
            if (numsNew[minIndex] > numsNew[j]) {
                minIndex = j
            }
        }
        [numsNew[i], numsNew[minIndex]] = [numsNew[minIndex], numsNew[i]]
    }
    return numsNew
}

const res1_2 = selectionSort_250407_1(numsSort_250331_1)
console.log('selectionSort_250407_1 res1_2', res1_2)