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
	for (let i = 0; i < length; ++i) result.push(i);
	return result;
}

function createBorder(grid, rows, columns) {
	rows.shift();
	for (const column of columns) walls.push([0, column]);
	for (const row of rows) {
		walls.push([row, 0]);
		walls.push([row, grid[0].length - 1]);
	}
	rows.pop();
	columns.shift();
	columns.pop();
	for (const column of columns) walls.push([grid.length - 1, column]);
}

function createMaze(grid, rows, columns) {
	if (rows.length < 2 || columns.length < 2) return;
	let vertical;
	let number;
	if (rows.length < columns.length) {
		vertical = true;
		number = getOddNumber(columns.length - 1);
		createWalls(rows, columns, vertical, columns[number]);
		createMaze(grid, rows, columns.slice(0, columns.indexOf(columns[number])));
		createMaze(grid, rows, columns.slice(columns.indexOf(columns[number]) + 1));
	} else {
		vertical = false;
		number = getOddNumber(rows.length - 1);
		createWalls(rows, columns, vertical, rows[number]);
		createMaze(grid, rows.slice(0, rows.indexOf(rows[number])), columns);
		createMaze(grid, rows.slice(rows.indexOf(rows[number]) + 1), columns);
	}
}

function getOddNumber(maximum) {
	let number = Math.floor(Math.random() * maximum);
	if (number % 2 === 0) {
		if (number === maximum) number -= 1;
		else number += 1;
	}
	return number;
}

function createWalls(rows, columns, vertical, number) {
	const nodes = [];
	if (vertical) for (const row of rows) nodes.push([row, number]);
	else for (const column of columns) nodes.push([number, column]);
	nodes.splice(getEvenNumber(nodes.length - 1), 1);
	for (const node of nodes) walls.push(node);
}

function getEvenNumber(maximum) {
	let number = Math.floor(Math.random() * maximum);
	if (number % 2 !== 0) {
		if (number === maximum) number -= 1;
		else number += 1;
	}
	return number;
}
