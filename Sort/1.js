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