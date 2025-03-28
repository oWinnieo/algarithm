/*
977. 有序数组的平方
简单

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序
 

进阶：

请你设计时间复杂度为 O(n) 的算法解决本问题
*/

const sortedSquares = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums.sort((a, b) => a - b)
}

const sortedSquaresByDaSheng = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let k = right;
    /* wtest *
    let arr1 = Array(nums.length)
    let arr2 = Array.from({length: nums.length}, (v, i) => v)
    console.log('arr 1', arr1, arr2)
    /* /wtest */
    let arr = Array.from({length: nums.length})
    while (left <= right) {
        let l = nums[left] * nums[left]
        let r = nums[right] * nums[right]
        if (l < r) {
            arr[k] = r
            right--
        } else {
            arr[k] = l
            left++
        }
        k--
    }
    return arr
}

var sortedSquares1 = function(nums) {
    // return nums.map(v=>v*v).sort((a,b)=>a-b)
    let left = 0
    let right = nums.length-1
    let arr = Array(nums.length)
    let k = right
    while(left<=right){
      let l =nums[left] * nums[left]
      let r = nums[right] * nums[right]
      if(l<r){
        arr[k] = r
        right--
      }else{
        arr[k] = l
        left++
      }
      k--
    }
    return arr
  };

let nums1 = [-4,-1,0,3,10]

let nums2 = [-7,-3,2,3,11]

// const res1 = sortedSquaresByDaSheng(nums1)
// console.log('sortedSquaresByDaSheng 1 res1', res1)

// const res2 = sortedSquares(nums2)
// console.log('res2', res2)

const sortedSquares_250326_1 = (arr) => {
  let left = 0
  let right = arr.length - 1
  let k = right
  let arrNew = Array.from({length: arr.length})
  while (left <= right) {
    let leftRes = arr[left] * arr[left]
    let rightRes = arr[right] * arr[right]
    if (leftRes > rightRes) {
      arrNew[k] = leftRes
      left++
    } else {
      arrNew[k] = rightRes
      right--
    }
    k--
  }
  return arrNew
}


// const arr11_250326 = Array.from({length: 10})
// const arr12_250326 = Array.from({length: 10}, (v, i) => i * 2)
// console.log('arr11_250326', arr11_250326)
// console.log('arr12_250326', arr12_250326)
console.log('nums1', nums1)
console.log('nums2', nums2)

const res11 = sortedSquares_250326_1(nums1)
console.log('res11', res11)

const res21 = sortedSquares_250326_1(nums2)
console.log('res21', res21)