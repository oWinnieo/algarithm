const repeatDelete = (nums) => {
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
const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const res1 = repeatDelete(nums2)
console.log('res1', res1)