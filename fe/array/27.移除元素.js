const deleteCertainItem = (nums, val) => {
    let resArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            resArr.push(nums[i])
        }
    }
    return resArr.length
}

const funByDaSheng = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            let wtestD = k++
            console.log('k', k, 'wtestD', wtestD)
            nums[wtestD] = nums[i]
            debugger;
        }
    }
    return k
}

var removeElement = function(nums, val) {
    // 双指针
    // [3,2,2,3] 3
    let k = 0
    for (let i = 0; i < nums.length; i++) {
      if(nums[i]!==val){
            // console.log('k', k, 'k++', k++)
          nums[k++] = nums[i]
          debugger;
      }
    }
    return k
  };

const nums1 = [3, 2, 2, 3]
const val1 = 3

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2

const res1 = funByDaSheng(nums1, val1);
console.log('res1', res1);
