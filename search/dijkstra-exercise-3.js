const graph = {
    A: { B: 1, C: 4},
    B: { A: 1, C: 2, D: 5},
    C: { A: 4, B: 2, D: 1},
    D: { B: 5, C: 1}
}

const dijkstraBackup = (graph, start) => {
    let distance = {};
    let visited = new Set();
    let nodes = Object.keys(graph);

    for (let key in graph) {
        distance[key] = Infinity;
    }

    distance[start] = 0;
    while (nodes.length) {
        nodes.sort((a, b) => distance[a] - distance[b]);
        let aim = nodes.shift();
        if (distance[aim] === Infinity) break;
        visited.add(aim);
        for (let neighbor in graph[aim]) {
            if (!visited.has(neighbor)) {
                let newDistance = distance[aim] + graph[aim][neighbor];
                if (newDistance < distance[neighbor]) {
                    distance[neighbor] = newDistance;
                }
            }
        }
    }
    return distance
}

const dijkstra = (graph, start) => {
    let distance = {};
    let visited = new Set();
    let nodes = Object.keys(graph);
    nodes.forEach(k => {
        if (k === start) {
            distance[k] = 0
        } else {
            distance[k] = Infinity;
        }
    })
    while (nodes.length) {
        nodes.sort((a, b) => distance[a] - distance[b]);
        let target = nodes.shift();
        if (distance[target] === Infinity) break;
        for (let neighbor in graph[target]) {
            if (!visited.has(neighbor)) {
                let newDistance = distance[target] + graph[target][neighbor];
                if (newDistance < distance[neighbor]) {
                    distance[neighbor] = newDistance;
                }
            }
        }
    }
    return distance
    
}

console.log('res aha 123', dijkstra(graph, 'A'));