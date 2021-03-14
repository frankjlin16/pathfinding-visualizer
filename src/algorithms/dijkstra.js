export function dijkstra(grid, startNode, finishNode) {
	const visitedNodes = [];
	startNode.distance = 0;
	const unvisitedNodes = getNodes(grid);
	while (unvisitedNodes.length) {
		sortNodes(unvisitedNodes);
		const closestNode = unvisitedNodes.shift();
		if (!closestNode.isWall) {
			if (closestNode.distance === Infinity) return visitedNodes;
			closestNode.isVisited = true;
			visitedNodes.push(closestNode);
			if (closestNode === finishNode) return visitedNodes;
			updateNeighbors(closestNode, grid);
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

function sortNodes(unvisitedNodes) {
	unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbors(node, grid) {
	const neighbors = getNeighbors(node, grid);
	for (const neighbor of neighbors) {
		neighbor.distance = node.distance + 1;
		neighbor.previousNode = node;
	}
}

function getNeighbors(node, grid) {
	const neighbors = [];
	const { row, column } = node;
	if (row > 0) neighbors.push(grid[row - 1][column]);
	if (row < grid.length - 1) neighbors.push(grid[row + 1][column]);
	if (column > 0) neighbors.push(grid[row][column - 1]);
	if (column < grid[0].length - 1) neighbors.push(grid[row][column + 1]);
	return neighbors.filter((neighbor) => !neighbor.isVisited);
}
