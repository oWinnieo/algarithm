const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    let mid = 0;
    let guess = 0;
    while (low <= high) {
        mid = Math.ceil((low + high) / 2);
        guess = list[mid];
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return undefined
}

let list1 = [1, 3, 5, 7, 9, 11, 13];
let item1 = 5;

let list2 = new Array(100).keys();
let item2 = 57;

let list3 = Array.from({length: 100}, (v, k) => k);
let item3 = 57;

let res = binarySearch(Array.from(list3), item3);
console.log('list', Array.from(list3));
console.log(res);