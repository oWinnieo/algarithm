/*
【冒泡排序动画演示】https://www.bilibili.com/video/BV1qY4y1h7Lz?vd_source=4e03c23dad636a1f83555277f3900371
*/
const bubbleSort_250331_1 = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
    // for (let i = 0; i < n - 1; i++) {
    //     // 内层循环控制每一轮比较的次数
    //     for (let j = 0; j < n - i - 1; j++) {
    //         // 如果前一个元素大于后一个元素，则交换它们的位置
    //         if (arr[j] > arr[j + 1]) {
    //             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    //         }
    //     }
    // }
}

const bubbleSort_250331_2 = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

const bubbleSort_250331_3 = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}

const bubbleSort_250331_4 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    console.log('numsNew', numsNew)
    for (let i = 0; i < numsNew.length - 1; i++) {
        for (let j = 0; j < numsNew.length - 1 - i; j++) {
            if (numsNew[j] > numsNew[j + 1]) {
                [numsNew[j], numsNew[j + 1]] = [numsNew[j + 1], numsNew[j]]
            }
        }
    }
    return numsNew
}

const bubbleSort_250331_5 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    console.log('numsNew', numsNew)
    for (let i = 0; i < numsNew.length - 1; i++) {
        for (let j = 0; j < numsNew.length - 1 - i; j++) {
            if (numsNew[j] > numsNew[j + 1]) {
                [numsNew[j], numsNew[j + 1]] = [numsNew[j + 1], numsNew[j]]
            }
        }
    }
    return numsNew
}

const bubbleSort_250407_1 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    for (let i = 0; i < numsNew.length - 1; i++) {
        for (let j = 0; j < numsNew.length - 1 - i; j++) {
            if (numsNew[j] > numsNew[j + 1]) {
                [numsNew[j], numsNew[j + 1]] = [numsNew[j + 1], numsNew[j]]
            }
        }
    }
    return numsNew
}

const res1_1 = bubbleSort_250407_1(numsSort_250331_1)
console.log('bubbleSort_250407_1 res1_1', res1_1)