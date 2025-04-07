/*
【插入排序动画演示】https://www.bilibili.com/video/BV1er4y1b7o4?vd_source=4e03c23dad636a1f83555277f3900371
*/

const insertSort_250331_1 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    console.log('numsNew', numsNew)
    for (let i = 1; i < numsNew.length; i++) {
        let cur = numsNew[i]
        let j = i - 1
        while (j >= 0 && numsNew[j] > cur) {
            numsNew[j + 1] = numsNew[j]
            j--
        }
        numsNew[j + 1] = cur
    }
    return numsNew
}

const insertSort_250402_1 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    for (let i = 1; i < numsNew.length; i++) {
        let curr = numsNew[i]
        let j = i - 1
        while (j >= 0 && numsNew[j] > curr) {
            numsNew[j + 1] = numsNew[j]
            j--
        }
        numsNew[j + 1] = curr
    }
    return numsNew
}

const insertSort_250407_1 = (nums) => {
    let numsNew = JSON.parse(JSON.stringify(nums))
    for (let i = 1; i < numsNew.length; i++) {
        let curr = numsNew[i]
        let j = i - 1;
        while (j >= 0 && numsNew[j] > curr) {
            numsNew[j + 1] = numsNew[j]
            j--
        }
        numsNew[j + 1] = curr
    }
    return numsNew
}

const res1_3 = insertSort_250407_1(numsSort_250331_1)
console.log('insertSort_250407_1 res1_3', res1_3)