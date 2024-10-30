
// const sumSubFun = (nums, target, i) => {
//     console.log('i a', i, 'nums', nums)
//     for 
// }
const sumFromTwoNumber = (nums, target) => {
    let numsArr = JSON.parse(JSON.stringify(nums))
    for (let i = 0; i < numsArr.length; i++) {
        // const resSub = sumSubFun(numsArr, target, i)
        for (let j = 0; j < numsArr.length; j++) {
            if (j !== i) {
                if (numsArr[j] + numsArr[i] === target) {
                    debugger;
                    return [i, j]
                }
            }
        }
    }
}

const sumFromTwoNumber1 = (nums, target) => {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let n = target - num;
        if (num in obj) {
            return [i, obj[num]] 
        } else {
            obj[n] = i
        }
    }
}

const twoSum = function(nums, target) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let n = target-num 
        debugger;
        if(num in obj){
            debugger;
            return [i,obj[num]]
        }else{
            debugger;
            obj[n] = i
        }
    }
  }

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 3];
const target3 = 6;

const res1 = sumFromTwoNumber1(nums1, target1);
console.log('res1', res1);
