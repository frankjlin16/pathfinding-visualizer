export function randomWalk(grid, startNode, finishNode) {
	let closestNode = startNode;
	const visitedNodes = [];
	for (let i = 0; i < 10000; ++i) {
		if (closestNode === finishNode) return visitedNodes;
		visitedNodes.push(closestNode);
		const neighbors = getNeighbors(closestNode, grid);
		const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
		closestNode = randomNeighbor;
	}
	return visitedNodes;
}

function getNeighbors(node, grid) {
	const neighbors = [];
	const { row, column } = node;
	if (row !== 0) neighbors.push(grid[row - 1][column]);
	if (row !== grid.length - 1) neighbors.push(grid[row + 1][column]);
	if (column !== 0) neighbors.push(grid[row][column - 1]);
	if (column !== grid[0].length - 1) neighbors.push(grid[row][column + 1]);
	return neighbors.filter((neighbor) => !neighbor.isWall);
}
