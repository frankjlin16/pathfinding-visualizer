## Pathfinding Visualizer

This is a visualizer for multiple pathfinding algorithms. In essence, a pathfinding algorithm seeks to find the shortest path between two points. Additionally, this visualizer uses a recursive division algorithm to procedurally generate maze structures. As a result, navigational obstacles are introduced to the pathfinding algorithms, somewhat simulating a map application navigating the obstacles of a complex highway system or puzzling urban sprawls.

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

## Algorithms

All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a calculated cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the afore mentioned cost calculations. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.

### 1. Depth-first search

Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by beginning at the start node and exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.

Fun fact: Depth-first search rarely returns the shortest path and is dreadfully inefficient at pathfinding!

### 2. Dijkstra's algorithm

Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree through building a set of nodes that have the smallest distance from the start node to the finish node.

Fun fact: Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.

### 3. A* search

A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* uses heuristics that reduce computation time by planning each step with informed decisions.

Fun fact: Google Maps uses an A* search coupled with collections of highly advanced heuristics.

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
