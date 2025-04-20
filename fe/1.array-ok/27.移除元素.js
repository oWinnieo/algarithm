/*
27. 移除元素
简单

提示
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。

假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：

更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
返回 k。
用户评测：

评测机将使用以下代码测试您的解决方案：

int[] nums = [...]; // 输入数组
int val = ...; // 要移除的值
int[] expectedNums = [...]; // 长度正确的预期答案。
                            // 它以不等于 val 的值排序。

int k = removeElement(nums, val); // 调用你的实现

assert k == expectedNums.length;
sort(nums, 0, k); // 排序 nums 的前 k 个元素
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
如果所有的断言都通过，你的解决方案将会 通过。

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2,_,_]
解释：你的函数函数应该返回 k = 2, 并且 nums 中的前两个元素均为 2。
你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3,_,_,_]
解释：你的函数应该返回 k = 5，并且 nums 中的前五个元素为 0,0,1,3,4。
注意这五个元素可以任意顺序返回。
你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/
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
          console.log('k', k)
          debugger;
      }
    }
    return k
  };

const removeExercise = (nums, val) => {
    let k = 0;
    for (let i1 = 0; i1 < nums.length; i1++) {
        console.log('k', k, 'nums[i1]', nums[i1])
        if (nums[i1] !== val) {
            nums[k++] = nums[i1]
            console.log('k', k)
        }
    }
    return k
}

var removeElement1 = function(nums, val) {
    // 双指针
    // [3,2,2,3] 3
    let k = 0
    for (let i = 0; i < nums.length; i++) {
      if(nums[i]!==val){
          nums[k++] = nums[i]
      }
    }
    return k
  };

const removeElementExercise = (nums, val) => {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    console.log('nums', nums)
    return slow
}

const nums1 = [3, 2, 2, 3]
const val1 = 3

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2

// const res1 = removeElementExercise(nums2, val2);
// console.log('removeExercise res1', res1);

const delCertainItem_250325_1 = (nums, val) => {
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return {
        length: slow,
        numsNew: nums.slice(0, slow)
    }
}

const res_250325_1 = delCertainItem_250325_1(nums1, val1);
console.log('delCertainItem_250325_1 res_250325_1', res_250325_1);
const res_250325_2 = delCertainItem_250325_1(nums2, val2);
console.log('delCertainItem_250325_1 res_250325_2', res_250325_2);