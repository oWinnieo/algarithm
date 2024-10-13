const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectSort = (arr1) => {
    let newArr = [];
    let smallestIndex;
    debugger;
    for (i = 0; i < arr1.length; i++) {
        smallestIndex = findSmallest(arr1);
        // let wtest = arr1.splice(3, 1);
        // debugger;
        // newArr.push(arr1.splice(smallestIndex, 1));
        // newArr.push(arr.pop(smallestIndex));
        newArr.push(i);
    }
    return newArr;
}

let list1 = [5, 3, 6, 2, 10];

let res = selectSort(list1);
console.log('res', res);