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
    let newArr = [];
    let smallestIndex;
    // debugger;
    for (let i = 0; i < arr.length; i++) {
        console.log('arr.length', arr.length, 'i', i)
        smallestIndex = findSmallest(arr);
        // let wtestd = arr.splice(smallestIndex, 1)
        // let wtestd = arr.pop(smallestIndex);
        // console.log('wtestd', wtestd, 'arr', arr)
        // newArr.push();
        // debugger;
        newArr.push(arr.splice(smallestIndex, 1)[0]);
        // newArr.push(smallestIndex);
    }
    return newArr;
}

let list1 = [5, 3, 6, 2, 10];

let res = selectSort(list1);
console.log('res', res);