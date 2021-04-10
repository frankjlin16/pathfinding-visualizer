## Pathfinding Visualizer

This is a visualizer for multiple pathfinding algorithms. In essence, a pathfinding algorithm seeks to find the shortest path between two points. Additionally, this visualizer can recursively generate maze structures which creates navigational obstacles for the pathfinding algorithms, partially simulating a map application navigating the obstacles of a complex highway system or a puzzling urban sprawl.

## Motivation

I built this web-app because I was curious how map applications worked and wanted to visualize their algorithms. Also, this project was appreciably inspired by Clément Mihailescu’s educational [YouTube](https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g) channel.

## Features

* feature 1
* feature 2
* feature 3
* feature 4
* feature 5

## Algorithms

All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a calculated cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the afore mentioned cost calculations. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.

### Depth-first search

Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by beginning at the start node and exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.

Fun fact: Depth-first search rarely returns the shortest path and is dreadfully inefficient at pathfinding!

### Dijkstra's algorithm

Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree through building a set of nodes that have the smallest distance from the start node to the finish node.

Fun fact: Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.

### A* search

A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* uses heuristics that reduce computation time by planning each step with informed decisions.

Fun fact: Google Maps uses an A* search coupled with collections of highly complex heuristics.

## Credits

* [Treact](https://treact.owaiskhan.me) by Owais Khan
* [Twin](https://github.com/ben-rogerson/twin.macro) by Ben Rogerson and contributors
* [iconmonstr](https://iconmonstr.com) by Alexander Kahlkopf

This project inspired by [Clément Mihailescu](https://github.com/clementmihailescu)

## License

MIT License

Copyright (c) 2021 Alek Broman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
