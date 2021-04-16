export function breadthFirst(grid, startNode, finishNode) {
	const visitedNodes = [];
	const unvisitedNodes = [];
	unvisitedNodes.push(startNode);
	while (unvisitedNodes.length) {
		let closestNode = unvisitedNodes.shift();
		if (!closestNode.isWall) {
			if (closestNode === finishNode) return visitedNodes;
			closestNode.isVisited = true;
			visitedNodes.push(closestNode);
			const neighbors = getNeighbors(closestNode, grid);
			for (const neighbor of neighbors) {
				neighbor.previousNode = closestNode;
				if (isVisited(neighbor, unvisitedNodes)) unvisitedNodes.push(neighbor);
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

function isVisited(neighbor, unvisitedNodes) {
	for (const node of unvisitedNodes) {
		if (node.row === neighbor.row && node.column === neighbor.column) {
			return false;
		}
	}
	return true;
}
