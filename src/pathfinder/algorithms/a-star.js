export function aStar(grid, startNode, finishNode) {
	startNode.distance = 0;
	const visitedNodes = [];
	const unvisitedNodes = [];
	unvisitedNodes.push(startNode);
	while (unvisitedNodes.length) {
		unvisitedNodes.sort((a, b) => a.totalDistance - b.totalDistance);
		const closestNode = unvisitedNodes.shift();
		if (closestNode === finishNode) return visitedNodes;
		if (!closestNode.isWall) {
			closestNode.isVisited = true;
			visitedNodes.push(closestNode);
			const neighbors = getNeighbors(closestNode, grid);
			for (const neighbor of neighbors) {
				const distance = closestNode.distance + 1;
				if (isVisited(neighbor, unvisitedNodes)) {
					unvisitedNodes.unshift(neighbor);
					neighbor.distance = distance;
					neighbor.totalDistance =
						distance + manhattanDistance(neighbor, finishNode);
					neighbor.previousNode = closestNode;
				} else if (distance < neighbor.distance) {
					neighbor.distance = distance;
					neighbor.totalDistance =
						distance + manhattanDistance(neighbor, finishNode);
					neighbor.previousNode = closestNode;
				}
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

function manhattanDistance(node, finishNode) {
	const x = Math.abs(node.row - finishNode.row);
	const y = Math.abs(node.column - finishNode.column);
	return x + y;
}
