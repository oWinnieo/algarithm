/*
【快速排序动画演示】https://www.bilibili.com/video/BV1F44y1G7vm?vd_source=4e03c23dad636a1f83555277f3900371
*/

const quickSort_250402_1 = (nums) => {
    // console.log('nums', nums)
    if (nums.length <= 1) return nums
    // debugger;
    let target = nums[0]
    let j = 1
    let arrSmall = []
    let arrBig = []
    while (j < nums.length) {
        if (nums[j] < target) {
            arrSmall.push(nums[j])
        } else {
            // debugger;
            arrBig.push(nums[j])
        }
        j++
    }
    return [...quickSort_250402_1(arrSmall), target, ...quickSort_250402_1(arrBig)]
}

const quickSort_250407_1 = (nums) => {
    if (nums.length <= 1) return nums
    let target = nums[0]
    let arrSmall = []
    let arrBig = []
    let j = 1
    while (j < nums.length) {
        if (nums[j] < target) {
            arrSmall.push(nums[j])
        } else {
            arrBig.push(nums[j])
        }
        j++
    }
    return [...quickSort_250407_1(arrSmall), target, ...quickSort_250407_1(arrBig)]
}

const quickSorted_250407_2 = (nums) => {
    if (nums.length <= 1) return nums
    let target = nums[0]
    let arrSmall = []
    let arrBig = []
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] < target) {
            arrSmall.push(nums[j])
        } else {
            arrBig.push(nums[j])
        }
    }
    return [...quickSorted_250407_2(arrSmall), target, ...quickSorted_250407_2(arrBig)]
}

const res1_4 = quickSort_250407_1(numsSort_250331_1)
console.log('quickSort_250407_1 res1_4', res1_4)

const res1_42 = quickSorted_250407_2(numsSort_250331_1)
console.log('quickSorted_250407_2 res1_42', res1_42)