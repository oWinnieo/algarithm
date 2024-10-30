const checkStr = (str) => {
    
    let strNew = str.toLowerCase().replace(/\W/g, "");
    console.log('strNew', strNew);
    let count = Math.ceil((strNew.length - 1) / 2);
    let resCount = 0;
    debugger;
    for (let i = 0; i <= count; i++) {
        if (strNew[i] !== strNew[strNew.length - 1 - i]) {
            resCount = i
            break;
        }
    }
    return resCount === 0 ? true : false
}

const checkByDaSheng = (str) => {
    let strNew = str.toLowerCase().replace(/\W/g, "");
    let left = 0;
    let right = strNew.length - 1;
    while(left <= right) {
        if (strNew[left] !== strNew[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

const str1 = "A man, a plan, a canal: Panama";
const str2 = "race a car";
const str3 = " "

const res1 = checkByDaSheng(str1);
console.log('res1', res1);
const res2 = checkByDaSheng(str2);
console.log('res2', res2);
const res3 = checkByDaSheng(str3);
console.log('res3', res3);