/**
 * 快排 -> 分治
 * abcdefg 找从起点开始的最短路径（无权图） -> 图的遍历
 * dijkstra 最短路径（有权图） -> 贪婪
 * 
 * 邮递员经过20个家庭的最短路径 -> 贪婪！
 * 在一堆人里面找出最大的朋友圈 -> 贪婪！
 */

/**
 * why
 * 绘制一张地图,至少需要多少种颜色区分不同地域?
 * https://zhidao.baidu.com/question/277932167.html
 * 
 * 根据四色定理，绘制一张地图，至少需要4种颜色区分不同地域。

任何一张地图只用四种颜色就能使具有共同边界的国家着上不同的颜色，被称为四色问题。

这一命题最早在1852年由一位英国制图员提出。他的疑问是，能否每张不出现飞地（即两个不连通的区域属于同一个国家的情况）的地图，都可以用不超过四种颜色染色，且不会有两个相邻地区颜色相同？出人意料，四色问题竟异常难于验证。

直到上世纪七十年代，数学家们才借助计算机首次得到完全证明，在1976年，美国数学家阿佩尔与哈肯在美国伊利诺斯大学的两台不同的电子计算机上，耗费了1200多个小时，验证了100多亿个逻辑判断，最终完成了四色定理的证明。

四色问题也终成四色定理——其描述为：如果在平面上划出一些邻接的有限区域，那么可以用不超过四种的颜色来给这些区域染色，使得每两个邻接区域染的颜色都不一样。
 */

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
// wtest find the most matched item everytime
const find = () => {
    let finSta = new Set();
    let staNeededTemp = JSON.parse(JSON.stringify(staNeeded))
    
    // let count = 1;
    // let coveredSta = new Set();
    
    while (staNeededTemp.length) {
        console.log('staNeededTemp >>>--- ------', staNeededTemp)
        debugger;
    // while(count >= 0) {
        // count--;
        let bestSta;
        let coveredSta = [];
        for (station in stations) {
            console.log('for >>>--- station', station, 'stations', stations);
            debugger;
            let states_for_station = stations[station];
            // console.log('station', station, 'states_for_station', states_for_station);
            let covered = [];
            /* 求交集 */
            staNeededTemp.forEach(item_for => {
                
                if (states_for_station.indexOf(item_for) >= 0) {
                    
                    // console.log('item_for', item_for, 'states_for_station', states_for_station)
                    covered.push(item_for)

                }
            })
            // console.log('staNeededTemp', staNeededTemp);
            // console.log('states_for_station', states_for_station);
            // console.log('coered 交集', covered, 'len', covered?.length);
            // console.log('coveredSta', coveredSta);
            // debugger;
            if (covered.length > coveredSta.length) {
                best_station = station;
                coveredSta = covered;
            }
            console.log('best_station', best_station);
            console.log('coveredSta', coveredSta, 'staNeededTemp', staNeededTemp);
            let staNeededNew = staNeededTemp.filter(item => {
                
                return !coveredSta.includes(item);
            })
            staNeededTemp = staNeededNew;
            // console.log('staNeededNew', staNeededNew);
            
            // debugger;
            if (coveredSta?.length > 0) {
                // finSta.add({
                //     staName: best_station,
                //     coveredSta: coveredSta,
                // })
                finSta.add(best_station);
            }            
            console.log('staNeededTemp', staNeededTemp);
            console.log('finSta', finSta);
            debugger;
            
        }
    }
    return finSta
    // console.log('coveredSta', coveredSta);

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