const staNeeded = [
    "mt", "wa", "or", "id", "nv", "ut", "ca", "az"
]
const stations = {
    'k1': ['id', 'nv', 'ut'],
    'k2': ['wa', 'id', 'mt'],
    'k3': ['or', 'nv', 'ca'],
    'k4': ['nv', 'ut'],
    'k5': ['ca', 'az']
    // 'k1': ['mt', 'wa'],
    // 'k2': ['wa', 'or']
}

const find = (staNeeded, stations) => {
    let finSta = new Set();
    let staNeededTemp = JSON.parse(JSON.stringify(staNeeded))

    while (staNeededTemp.length) {
        let staBest = null;
        let staCovered = [];
        for (sta in stations) {
            let staAim = stations[sta];
            let staCoveredTemp = staNeededTemp.filter(item => staAim.includes(item));
            if (staCoveredTemp.length > staCovered.length) {
                staCovered = staCoveredTemp;
                staBest = sta;
            }
        }
        staNeededTemp = staNeededTemp.filter(item => !staCovered.includes(item));
        finSta.add(staBest);
    }
    return finSta;
}

console.log('exercise 2', find(staNeeded, stations))