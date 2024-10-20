/**
 * 解法1: 动态规划：也叫带备忘录（memo）的递归，或者叫递归树的剪枝（pruning）;
 * 
 * 解法2: non-recursive, or interative
 */
const LOri = (nums, i) => {
    if (i === nums.length - 1) { // if is the last number
        return 1;
    }
    let lenMax = 1;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
            lenMax = Math.max(lenMax, LOri(nums, j) + 1)
        }
    }
    return lenMax
}

const L1 = (nums, i1, memo) => {
    let lenMax = 1;
    // if (memo.get(i1)) {
    //     return memo.get(i1)
    // }
    for (let j1 = i1 + 1; j1 < nums.length; j1++) {
        if (nums[j1] > nums[i1]) {
            lenMax = Math.max(lenMax, L1(nums, j1, memo) + 1)
        }
    }
    // memo.set(i1, lenMax)
    return lenMax
}

const lengthOfLIS = (nums) => {
    let lenAimMax = 1;
    let beginTime = +new Date();
    let memo = new Map();
    for (let iAim = 0; iAim < nums.length; iAim++) {
        lenAimMax = Math.max(lenAimMax, L1(nums, iAim, memo))
    }
    let endTime = +new Date();
    console.log("endTime - beginTime", endTime - beginTime)
    return lenAimMax
}

const getRandomNums = (n) => {
    var count=100; var a=new Array();
    for(var i=0;i<100;i++){
        a[i]=i+1;

    }
    a.sort(function(){
    return 0.5-Math.random();

    })
    return a

}


const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const nums1 = [1, 5, 2, 4, 3];
// const nums2 = getRandomNums(100);
const nums3 = [1, 12, 17, 53, 72, 81, 52, 7, 32, 55, 54, 96, 20, 86, 63, 30, 37, 92, 2, 3, 66, 75, 74, 65, 70, 79, 15, 73, 59, 34, 62, 76, 48, 95, 99, 21, 16, 97, 61, 51, 67, 56, 77, 91, 31, 82, 47, 27, 71, 85, 4, 42, 78, 49, 100, 22, 28, 98, 94, 44, 50, 23, 87, 14, 84, 69, 57, 13, 11, 40, 45, 8, 46, 90, 29, 10, 83, 5, 43, 24, 68, 19, 58, 93, 80, 33, 60, 64, 26, 89, 35, 39, 38, 25, 36, 6, 9, 41, 18, 88]

console.log('nums3', nums3);
console.log("lengthOfLIS(nums, 0)", lengthOfLIS(nums3, 0))

const nums4 = [3, -4, 2, -1, 2, 6, -5, 4]