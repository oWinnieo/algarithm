

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
}

function dijkstra(graph, start) {
    let distances = {};
    let visited = new Set();

    let nodes = Object.keys(graph);
    console.log('nodes', nodes);
    
    /* wtest ori */
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    /* /wtest ori */
    /* wtest *
    nodes.forEach((v, i) => {
        distances[v] = i;
    })
    /* /wtest */
    // console.log('distances', distances);

    distances[start] = 0;
    console.log('distances', distances);

    while (nodes.length) {
        // console.log('nodes.length', nodes.length, JSON.stringify(nodes));
        nodes.sort((a, b) => distances[a] - distances[b]);
        // console.log('after', JSON.stringify(nodes));
        let closestNode = nodes.shift();
        if (distances[closestNode] === Infinity) break;
        visited.add(closestNode);
        // console.log('closestNode', closestNode, 'visited', visited, 'graph[closestNode]', graph[closestNode]);

        for (let neighbor in graph[closestNode]) {
            // console.log('neighbor', neighbor);
            if (!visited.has(neighbor)) {
                console.log('distances[closestNode]',
                    distances[closestNode],
                    'graph[closestNode][neighbor]',
                    graph[closestNode][neighbor],
                    'distances[neighbor]',
                    distances[neighbor]);
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    console.log('distances', distances);
                    // debugger;
                }
            }
        }
        

        // debugger;
    }
    return distances;
}

console.log(dijkstra(graph, 'A'));