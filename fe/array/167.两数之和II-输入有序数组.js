const getSum1 = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        /* wtest */
        let num = target - nums[i]
        if (nums[i] in obj) {
            return [i, obj[nums[i]]].map(k => k + 1).sort((a, b) => a - b)
        } else {
            obj[num] = i
        }
        /* /wtest */
        /* wtest demo *
        let num = nums[i];
        let n = target - num;
        if (num in obj) {
            return [i, obj[num]]
        } else {
            obj[n] = i;
        }
        /* /wtest demo */
    }
}

const getSum2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
} 

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [2, 3, 4];
const target2 = 6;

const nums3 = [-1, 0];
const target3 = -1;

const res1 = getSum2(nums1, target1);
console.log('res1', res1);

const res2 = getSum2(nums2, target2);
console.log('res2', res2);

const res3 = getSum2(nums3, target3);
console.log('res3', res3);
