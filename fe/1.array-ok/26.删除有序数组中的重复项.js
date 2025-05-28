/*
26. 删除有序数组中的重复项
简单

提示
给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
返回 k 。
判题标准:

系统会用下面的代码来测试你的题解:

int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
如果所有断言都通过，那么您的题解将被 通过。

示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

提示：

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按 非严格递增 排列
*/
const repeatDelete_self_1 = (nums) => {
    const obj = {};
    let resArr = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!(num in obj)) {
            resArr.push(num)
            obj[num] = i
        }
    }
    return resArr
}


const funByDaSheng = (nums) => {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    console.log('nums new', nums.slice(0, slow + 1))
    return slow + 1 // wtest 数组的长度比下标多1
}

const repeatDelete_exercise = (nums) => {
    let slow = 0;
    let fast = 0;
    while(fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums3 = [1,1,1,1,1,2,2,5,5,5]

const nums22 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const res1 = repeatDelete_exercise(nums2)
// console.log('res1', res1)

const repeatDel_250325_1 = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            nums[i] = nums[i + 1]
        }
    }
    return nums
}

const repeatDel_250325_2 = (nums) => {
    console.log('~~~~~~ repeatDel_250325_2 nums ori', nums)
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        console.log('~~~ fast', fast, 'slow', slow,
            'nums[fast]', nums[fast],
            'nums[slow]', nums[slow],
            'nums', nums
        )
        debugger;
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
            console.log('slow', slow)
        }
        fast++
    }
    debugger;
    console.log('repeatDel_250325_2 nums new', nums)
    return {
        length: slow + 1,
        numsNew: nums.slice(0, slow+1)
    }
}

const demo_250325_1 = (nums) => {
    // const n = nums.length;
    // if (n === 0) {
    //     return 0;
    // }
    // let fast = 1, slow = 1;
    // while (fast < n) {
    //     if (nums[fast] !== nums[fast - 1]) {
    //         nums[slow] = nums[fast];
    //         ++slow;
    //     }
    //     ++fast;
    // }
    // return slow;

    // 作者：力扣官方题解
    // 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/solutions/728105/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) { // nums[i] 不是重复项
            nums[k++] = nums[i]; // 保留 nums[i]
        }
    }
    return k;

    // 作者：灵茶山艾府
    // 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/solutions/2807162/gen-zhao-wo-guo-yi-bian-shi-li-2ni-jiu-m-rvyk/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

const delRep_250427_1 = (nums) => {
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return nums.slice(0, slow + 1)
}



// const res_250325_1 = repeatDel_250325_1(nums3)
// console.log('repeatDel_250325_1 res_250325_1', res_250325_1)
// const res_250325_2 = repeatDel_250325_1(nums2)
// console.log('res_250325_2', res_250325_2)

// const res_250325_11 = repeatDelete_self_1(nums3)
// console.log('repeatDelete_self_1 res_250325_11', res_250325_11)
// const res_250325_21 = repeatDelete_self_1(nums2)
// console.log('res_250325_21', res_250325_21)

// const res_250325_12 = repeatDel_250325_2(nums3)
// console.log('repeatDel_250325_2 res_250325_12', res_250325_12)
const res_250325_22 = repeatDel_250325_2(nums2)
console.log('res_250325_22', res_250325_22)

// const res_250325_13 = funByDaSheng(nums3)
// console.log('funByDaSheng res_250325_13', res_250325_13)
// const res_250325_23 = funByDaSheng(nums2)
// console.log('res_250325_23', res_250325_23)

// const res_250325_14 = demo_250325_1(nums3)
// console.log('funByDaSheng res_250325_14', res_250325_14)
// const res_250325_24 = demo_250325_1(nums2)
// console.log('res_250325_24', res_250325_24)

const res1 = delRep_250427_1(nums1)
console.log('res1', res1)
const res2 = delRep_250427_1(nums22)
console.log('res2', res2)
const res3 = delRep_250427_1(nums3)
console.log('res3', res3)