// console.log("冒泡排序结果: ", bubbleSort([...arr]));
    // 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
    // 空间复杂度：O(1)
    // In-place 内排序
    // 稳定
// console.log("选择排序结果: ", selectionSort([...arr]));
    // 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
    // 空间复杂度：O(1)
    // In-place 内排序
    // 不稳定
// console.log("插入排序结果: ", insertionSort([...arr]));
    // 时间复杂度：平均 O(n²)、最好 O(n)、最坏 O(n²)
    // 空间复杂度：O(1)
    // In-place 内排序
    // 稳定
// console.log("快速排序结果: ", quickSort([...arr]));
    // 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(n²)
    // 空间复杂度：O(nlogN)
    // In-place 内排序
    // 不稳定
// console.log("归并排序结果: ", mergeSort([...arr]));
    // 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(nlogN)
    // 空间复杂度：O(N) 空间换时间
    // Out-place 外排序
    // 稳定
// console.log("堆排序结果: ", heapSort([...arr]));
    // 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(nlogN)
    // 空间复杂度：O(1)
    // In-place 内排序
    // 不稳定

// 希尔排序: 插入排序的升级版本
    // 时间复杂度：平均 O(nlogN)、最好 O(nlog²N)、最坏 O(n²)
    // 空间复杂度：O(1)
    // In-place 内排序
    // 不稳定
    // var sortArray = function(nums) {
    //     const n = nums.length;
    //     for (let gap = n >> 1; gap > 0; gap >>= 1) {
    //       for (let i = 0; i < gap; ++i) {
    //         for (let j = i + gap; j < n; j += gap) {
    //           let preIndex = j - gap;
    //           const curNum = nums[j];
    //           while (preIndex >= 0 && curNum < nums[preIndex]) {
    //             nums[preIndex + gap] = nums[preIndex];
    //             preIndex -= gap;
    //           }
    //           nums[preIndex + gap] = curNum;
    //         }
    //       }
    //     }
    //     return nums;
    //   };
// 计数排序
    // 时间复杂度：平均 O(n + k)、最好 O(n + k)、最坏 O(n + k)
    // 空间复杂度：O(n + k)
    // Out-place 外排序
    // 稳定
// 基数排序
    // 基于计数排序的排序算法。

    // 时间复杂度：O(d(n+k))(d 表示最长数字的位数，k 表示每个基数可能的取值范围大小)
    // 空间复杂度：O(n+k)（k 表示每个基数可能的取值范围大小）
    // Out-place 外排序
    // 稳定
// 桶排序
    // 基于其他排序算法的排序算法。

    // 时间复杂度：平均 O(n + k)、最好 O(n + k)、最坏 O(n²)
    // 空间复杂度：O(n + k)
    // Out-place 外排序
    // 稳定

  
//   作者：白加黑
//   链接：https://leetcode.cn/problems/sort-an-array/solutions/1745235/javas-by-federalyu-w49k/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/* JavaScript 版本 十大排序算法
https://leetcode.cn/problems/sort-an-array/solutions/1745235/javas-by-federalyu-w49k
*/

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectSort = (arr) => {
    let arrOriLen = arr.length;
    let newArr = [];
    let smallestIndex;
    for (let i = 0; i < arrOriLen; i++) {
        smallestIndex = findSmallest(arr);
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return newArr;
}

let list1 = [5, 3, 6, 2, 10];

let res = selectSort(list1);
console.log('res', res);