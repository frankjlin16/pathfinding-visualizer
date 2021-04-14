## Pathfinding Visualizer

This web-app visualizes algorithms that seek to find the shortest path between two points and employs recursive division to procedurally generate maze structures. Consequently, maze structures act as navigational obstacles for the pathfinding algorithms, somewhat simulating a map application navigating the obstacles of a complex highway system or puzzling urban sprawls.

## Motivation

I built this web-app because I was curious how map applications worked and wanted to visualize their algorithms. Also, this project was appreciably inspired by Clément Mihailescu’s entertaining and informative [YouTube](https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g) channel.

## Features

1.	Six assorted pathfinding algorithms
2.	One procedural maze generation algorithm
3.	Pixel-perfect adapting grid dimensions
4.	Fully responsive design with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
5.	Drag/droppable start and finish nodes
6.	Wall node creation for extended control
7.	Interactivity with touch/pen input support
8.	Optimized for low-end mobile devices

## How to use

Before beginning, drag and drop the `START` and `FINISH` nodes to your desired location and create walls by selecting any `UNVISITED` nodes on the grid.<sup>1</sup> After, read about the different algorithms at the bottom of the page and decide which you want to use, then select its respective button to start visualizing. During use, refer to the node legend to interpret any given state.

 1.	`START`/`FINISH` node transposition not supported on mobile devices.

## Algorithms

All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the afore mentioned costs. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.

### Random walk

Random walk is unweighted and does not guarantee the shortest path. This algorithm works by repeatedly choosing and exploring neighbor nodes at random or based on a probability distribution, keeping the resulting path in a list.

`Fun fact: Random walks have applications in nearly every major field of science.`

### Depth-first search

Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.

`Fun fact: Depth-first search is inefficient at pathfinding because of its dreadful meandering!`

### Breadth-first search

Breadth-first search is unweighted and guarantees the shortest path. This algorithm works by exploring all neighbor nodes at the present depth prior to exploring nodes at succeeding depth.

`Fun fact: Breadth-first search was invented in 1945 by computer scientist Konrad Zuse, in his rejected Ph.D. thesis.`

### Greedy best-first search

Greedy best-first search is unweighted and does not guarantee the shortest path. This algorithm works by always choosing the lowest-cost path through using a combination of depth-first search and breadth-first search algorithms. 

`Fun fact: Greedy best-first search is not optimal for pathfinding because it can get stuck in infinite loops.`

### Dijkstra's algorithm

Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree from the set of nodes that have the smallest distance from the `START` to the `FINISH` node.

`Fun fact: Computer scientist Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.`

### A* search

A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* uses heuristics that reduce computation time by planning each step with informed decisions.

`Fun fact: Google Maps uses an A* search coupled with collections of highly advanced heuristics.`

## Credits

* [Treact](https://treact.owaiskhan.me) by Owais Khan
* [Twin](https://github.com/ben-rogerson/twin.macro) by Ben Rogerson and contributors
* [iconmonstr](https://iconmonstr.com) by Alexander Kahlkopf

Project inspired by [Clément Mihailescu](https://github.com/clementmihailescu)

## License

MIT License

Copyright (c) 2021 Alek Broman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
