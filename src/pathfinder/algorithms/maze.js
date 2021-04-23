let walls;

export function maze(grid) {
	const rows = range(grid.length);
	const columns = range(grid[0].length);
	walls = [];
	createBorder(grid, rows, columns);
	createMaze(grid, rows, columns);
	return walls;
}

function range(length) {
	const result = [];
	for (let i = 0; i < length; ++i) {
		result.push(i);
	}
	return result;
}

function createBorder(grid, rows, columns) {
	rows.shift();
	for (const node of columns) {
		walls.push([0, node]);
	}
	for (const node of rows) {
		walls.push([node, 0]);
		walls.push([node, grid[0].length - 1]);
	}
	rows.pop();
	columns.shift();
	columns.pop();
	for (const node of columns) {
		walls.push([grid.length - 1, node]);
	}
}

function createMaze(grid, rows, columns) {
	if (rows.length < 2 || columns.length < 2) {
		return;
	}
	let direction;
	let number;
	if (rows.length < columns.length) {
		direction = 0;
		number = getOddNumber(columns.length - 1);
		createWalls(rows, columns, direction, columns[number]);
		createMaze(grid, rows, columns.slice(0, columns.indexOf(columns[number])));
		createMaze(grid, rows, columns.slice(columns.indexOf(columns[number]) + 1));
	} else {
		direction = 1;
		number = getOddNumber(rows.length - 1);
		createWalls(rows, columns, direction, rows[number]);
		createMaze(grid, rows.slice(0, rows.indexOf(rows[number])), columns);
		createMaze(grid, rows.slice(rows.indexOf(rows[number]) + 1), columns);
	}
}

function getOddNumber(maximum) {
	let number = Math.floor(Math.random() * maximum);
	if (number % 2 === 0) {
		if (number === maximum) {
			number -= 1;
		} else {
			number += 1;
		}
	}
	return number;
}

function createWalls(rows, columns, direction, number) {
	const nodes = [];
	if (direction === 0) {
		for (const node of rows) {
			nodes.push([node, number]);
		}
	} else {
		for (const node of columns) {
			nodes.push([number, node]);
		}
	}
	nodes.splice(getEvenNumber(nodes.length - 1), 1);
	for (const node of nodes) {
		walls.push(node);
	}
}

function getEvenNumber(maximum) {
	let number = Math.floor(Math.random() * maximum);
	if (number % 2 !== 0) {
		if (number === maximum) {
			number -= 1;
		} else {
			number += 1;
		}
	}
	return number;
}
