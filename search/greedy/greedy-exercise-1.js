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

const find = () => {
    let finSta = new Set();
    let staNeededTemp = JSON.parse(JSON.stringify(staNeeded))

    while (staNeededTemp.length) {
        let staBest = null;
        let staCovered = [];
        for (let aim in stations) {
            let aimSta = stations[aim];
            let staCoveredTemp = staNeededTemp.filter(sta => aimSta.includes(sta));
            if (staCoveredTemp.length > staCovered.length) {
                staCovered = staCoveredTemp;
                staBest = aim;
            }
        }
        staNeededTemp = staNeededTemp.filter(sta => !staCovered.includes(sta));
        finSta.add(staBest);
    }
    return finSta;
    
}

console.log('res', find())