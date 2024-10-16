Dijkstra’s Shortest Path Algorithm in JavaScript
https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15

// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },       // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
    B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

function dijkstra(graph, start) {
    // Create an object to store the shortest distance from the start node to every other node
    let distances = {};

    // A set to keep track of all visited nodes
    let visited = new Set();

    // Get all the nodes of the graph
    let nodes = Object.keys(graph);

    // Initially, set the shortest distance to every node as Infinity
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    
    // The distance from the start node to itself is 0
    distances[start] = 0;

    // Loop until all nodes are visited
    while (nodes.length) {
        // Sort nodes by distance and pick the closest unvisited node
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // Mark the chosen node as visited
        visited.add(closestNode);

        // For each neighboring node of the current node
        for (let neighbor in graph[closestNode]) {
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor)) {
                // Calculate tentative distance to the neighboring node
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor]) {
                    // Update the shortest distance to this neighbor
                    distances[neighbor] = newDistance;
                }
            }
        }
    }

    // Return the shortest distance from the start node to all nodes
    return distances;
}

// Example: Find shortest distances from node A to all other nodes in the graph
console.log(dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }

/* ****** 分割线 ****** */
// let graph = {};
// graph['start'] = {};
// graph['start']['a'] = 6;
// graph['start']['b'] = 2;

// graph['a'] = {};
// graph['a']['fin'] = 1;

// graph['b'] = {};
// graph['b']['a'] = 3;
// graph['b']['fin'] = 5;

// graph['fin'] = {};

// let costs = {};
// costs['a'] = 6;
// costs['b'] = 2;
// costs['fin'] = Infinity;

// let parents = {};
// parents['a'] = 'start';
// parents['b'] = 'start';
// parents['fin'] = undefined;

// let processed = [];
/* ****** *
function dijkstra(graph, source) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
 
    // 初始化
    for (const node in graph) {
        if (node !== source) {
            distances[node] = Infinity;
            previous[node] = null;
            nodes.enqueue(node, distances[node]);
        }
    }
 
    distances[source] = 0;
    nodes.enqueue(source, 0);
 
    const seen = new Set();
 
    while (!nodes.isEmpty()) {
        const closestNode = nodes.dequeue().key;
        seen.add(closestNode);
 
        graph[closestNode].forEach(neighbor => {
            const newDistance = distances[closestNode] + neighbor.weight;
            if (newDistance < distances[neighbor.node]) {
                distances[neighbor.node] = newDistance;
                previous[neighbor.node] = closestNode;
                nodes.enqueue(neighbor.node, newDistance);
            }
        });
    }
 
    return {
        distances,
        previous
    };
}
 
// 示例使用
const graph = {
    '0': [
        { node: '1', weight: 2 },
        { node: '3', weight: 5 }
    ],
    '1': [
        { node: '2', weight: 3 }
    ],
    '2': [
        { node: '4', weight: 1 },
        { node: '5', weight: 6 }
    ],
    '3': [
        { node: '4', weight: 2 }
    ],
    '4': [],
    '5': []
};
 
const { distances, previous } = dijkstra(graph, '0');
console.log(distances); // 输出每个节点到源节点'0'的最短路径
console.log(previous); // 输出每个节点的前一个节点
/* /****** */

