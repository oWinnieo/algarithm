const graph = {
    A: {
        B: 1, C: 4
    },
    B: {
        A: 1, C: 2, D: 5
    },
    C: {
        A: 4, B: 2, D: 1
    },
    D: {
        B: 5, C: 1
    }
}

function dijkstra (graph, start) {
    let distances = {};
    let visited = new Set();
    let nodes = Object.keys(graph);

    for (let key in graph) {
        distances[key] = Infinity;
    }
    distances[start] = 0;
    console.log('distances', distances);
    // debugger;
    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let aimNode = nodes.shift();
        if (distances[aimNode] === Infinity) break;
        visited.add(aimNode);
        for (let neighbor in graph[aimNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[aimNode] + graph[aimNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }
        }
        
    }
    return distances;
}

const res = dijkstra(graph, 'A')
console.log('res', res)
