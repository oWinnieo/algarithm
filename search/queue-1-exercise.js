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
    Queue.prototype.size = () => {
        return this.items.length;
    }
    Queue.prototype.isEmpty = () => {
        return this.items.length === 0;
    }
    Queue.prototype.toString = () => {
        let resStr = '';
        this.items.forEach(v => {
            resStr += v + ' ';
        })
        return resStr;
    }
    Queue.prototype.front = () => {
        return this.items[0];
    }
}

const personIsSeller = (person) => {
    for (let i = 0; i < person.length; i++) {
        return person[i][person[i].length-1] === 'm' ? person[i] : false
    }
}

const searchSeller = () => {
    let queueItems = new Queue()
    queueItems.enqueue(graph['you']);
    while (queueItems.size() > 0) {
        let person = queueItems.dequeue()
        if (personIsSeller(person)) {
            return personIsSeller(person) + ' is a mango seller!';
        } else {
            person.forEach(v => {
                queueItems.enqueue(graph[v])
            })
        }
    }
    return false
}

const resSearchSeller = searchSeller();
console.log('resSearchSeller', resSearchSeller)