export function depthFirst(grid, startNode, finishNode) {
	const visitedNodes = [];
	const unvisitedNodes = [];
	unvisitedNodes.push(startNode);
	while (unvisitedNodes.length) {
		const closestNode = unvisitedNodes.shift();
		if (closestNode === finishNode) return visitedNodes;
		if (!closestNode.isWall) {
			closestNode.isVisited = true;
			visitedNodes.push(closestNode);
			const neighbors = getNeighbors(closestNode, grid);
			for (const neighbor of neighbors) {
				neighbor.previousNode = closestNode;
				unvisitedNodes.unshift(neighbor);
			}
		}
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
	return neighbors.filter((neighbor) => !neighbor.isVisited);
}
