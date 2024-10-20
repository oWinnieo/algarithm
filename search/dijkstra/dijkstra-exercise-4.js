const graph = {
    A: { B: 1, C: 4},
    B: { A: 1, C: 2, D: 5},
    C: { A: 4, B: 2, D: 1},
    D: { B: 5, C: 1}
}

const dijkstra = (graph, start) => {
    let distance = {};
    let visited = new Set();
    let nodes = Object.keys(graph)

    nodes.forEach(node => {
        if (node === start) {
            distance[node] = 0;
        } else {
            distance[node] = Infinity;
        }
    })

    while (nodes.length) {
        nodes.sort((a, b) => distance[a] - distance[b]);
        if (distance[nodes[0]] === Infinity) break;
        let aim = nodes.shift();
        for (let neighbor in graph[aim]) {
            if (!visited.has(neighbor)) {
                let newDistance = distance[aim] + graph[aim][neighbor];
                if (newDistance < distance[neighbor]) {
                    distance[neighbor] = newDistance;
                }
            }
        }
    }
    return distance;
}

console.log(dijkstra(graph, 'A'))