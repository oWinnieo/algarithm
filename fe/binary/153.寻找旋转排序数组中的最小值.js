/*
153. 寻找旋转排序数组中的最小值
中等

提示
已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
示例 2：

输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 3 次得到输入数组。
示例 3：

输入：nums = [11,13,15,17]
输出：11
解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

提示：

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
nums 中的所有整数 互不相同
nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
*/
/*
https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/698479/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
思路:
由于数组不包含重复元素，并且只要当前的区间长度不为 1，pivot 就不会与 high 重合；而如果当前的区间长度为 1，这说明我们已经可以结束二分查找了。因此不会存在 nums[pivot]=nums[high] 的情况。

当二分查找结束时，我们就得到了最小值所在的位置。

作者：力扣官方题解
链接：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

复杂度分析

时间复杂度：时间复杂度为 O(logn)，其中 n 是数组 nums 的长度。在二分查找的过程中，每一步会忽略一半的区间，因此时间复杂度为 O(logn)。

空间复杂度：O(1)。

作者：力扣官方题解
链接：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left < right) {
        mid = Math.ceil((left + right) / 2)
        if (nums[mid] < nums[right]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        return nums[left]
        // else if (nums[mid] > nums[right]) {
            // left = mid + 1
        // }
        console.log('left', left, 'right', right, 'mid', mid)
        debugger;
        
    }
    return "no found"
    
}

const nums1 = [3,4,5,1,2]
const nums2 = [4,5,6,7,0,1,2]
const nums3 = [11,13,15,17]

const res1 = findMin(nums1)
console.log('res1', res1)

const res2 = findMin(nums2)
console.log('res2', res2)

const res3 = findMin(nums3)
console.log('res3', res3)