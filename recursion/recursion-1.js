const fact = (x) => {
    if (x === 1) {
        return 1
    } else {
        return x * fact(x - 1)
    }
}

const res = fact(5)
console.log('res', res)