const arrData = [12, 52, 33, 214, 315, 96];

let arrTemp = JSON.parse(JSON.stringify(arrData))

let graph = {};
graph["you"] = ['alice', 'bob', 'claire'];
graph["bob"] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];
console.log('graph', graph);

function Queue () {
    this.items = [];
    Queue.prototype.enqueue = element => {
        this.items.push(element);
    }
    Queue.prototype.dequeue = () => {
        return this.items.shift();
    }
    Queue.prototype.front = () => {
        return this.items[0];
    }
    Queue.prototype.isEmpty = () => {
        return this.items.length === 0;
    }
    Queue.prototype.size = () => {
        return this.items.length;
    }
    Queue.prototype.toString = () => {
        let str = '';
        for (let value of this.items) {
            str += value + ' '
        }
        return str;
    }
}
let queue1 = new Queue()
queue1.enqueue('a');
queue1.enqueue('b');
queue1.enqueue('c');
queue1.enqueue('d');
queue1.enqueue('e');
queue1.enqueue('f');
console.log('queue1', queue1);

queue1.dequeue();
console.log('queue1', queue1);

console.log(queue1.front());
console.log(queue1.isEmpty());
console.log(queue1.size());
console.log(queue1.toString());

const personIsSeller = (person, searchedArr) => {
    console.log('person', person);
    for (let i = 0; i < person.length; i++) {
        // let wtest = searchedArr?.length > 0 ? searchedArr.indexOf('alice') : 0;
        // console.log('wtest', wtest)
        // debugger;
        if (searchedArr?.length > 0 && searchedArr.indexOf(person[i]) < 0) {
            console.log('person[i]', person[i], 'v[v.length-1]', person[i][person[i].length-1], 'person[i]', person[i])
            if (person[i][person[i].length-1] === 'm') {
                console.log('aha wtest >>>')
                return person[i]
            }
        }
        // return false
    }
}
const searchSeller = () => {
    let searchQueue = new Queue()
    searchQueue.enqueue(graph['you']);
    console.log('searchQueue', searchQueue)
    let searchedArr = [];
    while (!searchQueue.isEmpty()) {
        let person = searchQueue.dequeue();
        // console.log('person wtest', person, 'searchedArr', searchedArr);
        debugger;
        let checkRes = personIsSeller(person, searchedArr)
        if (checkRes) {
            console.log(checkRes, 'is a mango seller!');
            return true;
        } else {
            for (let j = 0; j < person.length; j++) {
                if (searchedArr.indexOf(person[j]) < 0) {
                    searchedArr.push(person[j])
                }
            }
            person.forEach(v1 => {
                searchQueue.enqueue(graph[v1])
            })
        }
    }
    console.log('no mango seller...')
    return false        
}

const res = searchSeller()