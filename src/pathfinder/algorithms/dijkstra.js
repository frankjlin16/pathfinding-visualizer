export function dijkstra(grid, startNode, finishNode) {
	startNode.distance = 0;
	const visitedNodes = [];
	const unvisitedNodes = getNodes(grid);
	while (unvisitedNodes.length) {
		unvisitedNodes.sort((a, b) => a.distance - b.distance);
		const closestNode = unvisitedNodes.shift();
		if (closestNode === finishNode) return visitedNodes;
		if (closestNode.distance === Infinity) return visitedNodes;
		if (!closestNode.isWall) {
			closestNode.isVisited = true;
			visitedNodes.push(closestNode);
			const neighbors = getNeighbors(closestNode, grid);
			for (const neighbor of neighbors) {
				neighbor.distance = closestNode.distance + 1;
				neighbor.previousNode = closestNode;
			}
		}
	}
}

function getNodes(grid) {
	const nodes = [];
	for (const row of grid) {
		for (const node of row) {
			nodes.push(node);
		}
	}
	return nodes;
}

function getNeighbors(node, grid) {
	const neighbors = [];
	const { row, column } = node;
	if (row !== 0) neighbors.push(grid[row - 1][column]);
	if (row !== grid.length - 1) neighbors.push(grid[row + 1][column]);
	if (column !== 0) neighbors.push(grid[row][column - 1]);
	if (column !== grid[0].length - 1) neighbors.push(grid[row][column + 1]);
	return neighbors.filter((neighbor) => !neighbor.isVisited);
}
