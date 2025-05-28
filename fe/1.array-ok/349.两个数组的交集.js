/*
349. 两个数组的交集
简单
给定两个数组 nums1 和 nums2 ，返回 它们的 
交集
 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/
const intersection = (nums1, nums2) => {
    let reSet = new Set()
    for (let i = 0; i < nums1.length; i++) {
        if (!(reSet.has(nums1[i]))) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    reSet.add(nums1[i])
                }
            }
        }
    }
    return [...reSet]
}
const intersectionByDaSheng1 = (nums1, nums2) => {
    return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
}

const intersectionByDaSheng2 = (nums1, nums2) => {
    let returnSet = new Set();
    let nums1Set = new Set(nums1)
    for (let i of nums2) {
        if (nums1Set.has(i)) {
            returnSet.add(i)
        }
    }
    return [...returnSet]
}


const n11 = [1,2,2,1]
const n12 = [2,2]

const n21 = [4,9,5]
const n22 = [9,4,9,8,4]

// const res1 = intersection(n11, n12)
// console.log('intersection res1', res1)

// const res2 = intersection(n21, n22)
// console.log('res2', res2)

const intersection_250326_1 = (arr1, arr2) => {
    return Array.from(new Set(arr1.filter(i => arr2.includes(i))))
}

const intersection_250326_2 = (arr1, arr2) => {
    let arrNew = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !arrNew.includes(arr1[i])) {
            arrNew.push(arr1[i])
        }
    }
    return arrNew
}

const intersection_250427_1 = (arr1, arr2) => {
    let setRes = new Set()
    let set1 = new Set(arr1)
    console.log('set1', set1)
    for (let i of arr2) {
        // console.log('i', i)
        if (set1.has(i)) {
            setRes.add(i)
        }
    }
    return [...setRes]
}

const intersection_250427_2 = (arr1, arr2) => {
    let setRes = new Set()
    let map1 = new Map()
    for (let i of arr1) {
        map1.set(i, 1)
    }
    for (let j of arr2) {
        if (map1.get(j) === 1) {
            setRes.add(j)
        }
    }
    console.log('map1', map1)
    return [...setRes]
}

const res11 = intersection_250427_1(n11, n12)
console.log('intersection_250427_1 res11', res11)

const res12 = intersection_250427_2(n11, n12)
console.log('intersection_250427_2 res12', res12)

const res21 = intersection_250427_1(n21, n22)
console.log('intersection_250427_1 res21', res21)

const res22 = intersection_250427_2(n21, n22)
console.log('intersection_250427_2 res22', res22)

// const res21 = intersection_250326_1(n21, n22)
// console.log('intersection_250326_1 res21', res21)

// const res12 = intersection_250326_2(n11, n12)
// console.log('intersection_250326_2 res12', res12)

// const res22 = intersection_250326_2(n21, n22)
// console.log('intersection_250326_2 res22', res22)