const staNeeded = [
    "mt", "wa", "or", "id", "nv" // wtest , "ut", "ca", "az"
]
const stations = {
    // 'k1': ['id', 'nv', 'ut'],
    // 'k2': ['wa', 'id', 'mt'],
    // 'k3': ['or', 'nv', 'ca'],
    // 'k4': ['nv', 'ut'],
    // 'k5': ['ca', 'az']
    'k1': ['mt', 'wa'],
    'k2': ['wa', 'or']
}

const find = () => {
    let finSta = [];
    
    let count = 1;
    // let coveredSta = new Set();
    let coveredSta = [];
    // while (staNeeded.length) {
    while(count >= 0) {
        count--;
        let bestSta;
        for (station in stations) {
            let states_for_station = stations[station];
            console.log('station', station, 'states_for_station', states_for_station);
            let covered = [];
            /* 求交集 */
            staNeeded.forEach(item_for => {
                
                if (states_for_station.indexOf(item_for) >= 0) {
                    
                    console.log('item_for', item_for, 'states_for_station', states_for_station)
                    covered.push(item_for)

                }
            })
            console.log('covered', covered, 'len', covered?.length);
            // debugger;
            if (covered.length > coveredSta.length) {
                best_station = station;
                coveredSta = covered;
                // debugger;
            }
            coveredSta.forEach(v => {
                staNeeded.splice(staNeeded.indexOf(v), 1)
            })
            console.log('staNeeded', staNeeded);
            
        }
    }
    console.log('coveredSta', coveredSta);

}

console.log('1', find())

/* wtest ori *
#!/usr/bin/env python
# coding:utf-8

states_need = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])  # 传入一个数组， 它被转换为集合

# 可供选择的广播台清单
stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

print(stations)
# 最终选择的广播台集合
final_stations = set()

while states_need:
    best_station = None
    states_covered = set()
    for station, states_for_station in stations.items():
        covered = states_need & states_for_station  # 求交集
        print("states_need:",states_need,"states_for_station:",states_for_station,"covered:",covered)
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered
        states_need -= states_covered
        final_stations.add(best_station)
        print("states_needed:",states_need,"best_station:",best_station,"final_stations:",final_stations)
        print("---")

print("Final_stations:",final_stations)
/* /wtest ori */

/* wtest *
#!/usr/bin/env python
# coding:utf-8

# states_need = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])  # 传入一个数组， 它被转换为集合
states_need = set(["mt", "wa", "or"])  # 传入一个数组， 它被转换为集合

# 可供选择的广播台清单
stations = {}
stations["kone"] = set(["mt", "wa"])
stations["ktwo"] = set(["wa", "or"])
# stations["kthree"] = set(["or", "nv", "ca"])
# stations["kfour"] = set(["nv", "ut"])
# stations["kfive"] = set(["ca", "az"])

print(stations)
# 最终选择的广播台集合
final_stations = set()

i = 0
while i <= 3:
    best_station = None
    states_covered = set()
    i = i + 1;
    for station, states_for_station in stations.items():
        covered = states_need & states_for_station  # 求交集
        print('station', station, 'states_for_station', states_for_station)
        # if i <= 3:
        # print("states_need:",states_need,"states_for_station:",states_for_station,"covered:",covered)
        # if len(covered) > len(states_covered):
        #     best_station = station
        #     states_covered = covered
        # states_need -= states_covered
        # final_stations.add(best_station)
        # print("states_needed:",states_need,"best_station:",best_station,"final_stations:",final_stations)
        # print("---")

print("Final_stations:",final_stations)

{'kone': {'wa', 'mt'}, 'ktwo': {'or', 'wa'}}
station kone states_for_station {'wa', 'mt'}
station ktwo states_for_station {'or', 'wa'}
station kone states_for_station {'wa', 'mt'}
station ktwo states_for_station {'or', 'wa'}
station kone states_for_station {'wa', 'mt'}
station ktwo states_for_station {'or', 'wa'}
station kone states_for_station {'wa', 'mt'}
station ktwo states_for_station {'or', 'wa'}
Final_stations: set()
/* /wtest */