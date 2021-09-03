## Pathfinding Visualizer

This web-app visualizes algorithms that seek to find the shortest path between two points and employs recursive division to procedurally generate maze structures. Consequently, maze structures act as navigational obstacles for the pathfinding algorithms, somewhat simulating a map application navigating the obstacles of a complex highway system or puzzling urban sprawls.

## Features

1.	Six assorted pathfinding algorithms
2.	One procedural maze generation algorithm
3.	Fully responsive design with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
4.	Viewport-dependent scaling visualization speed
5.	Exhaustive user input error handling
6.	Pixel-perfect adapting node dimensions
7.	Drag/droppable start and finish nodes
8.	Wall node creation for custom obstacles
9.	Interactivity with touch/pen input support
10.	Optimized for low-end mobile devices

## Usage

Drag and drop the `START` and `FINISH` nodes to your desired location and create walls by selecting any `UNVISITED` nodes on the grid.<sup>1</sup> After, read about the different algorithms at the bottom of the page and decide which you want to use, then select its respective button to begin visualizing.<sup>2</sup> During use, refer to the node legend to interpret any given state.

1.	`START`/`FINISH` node transposition not supported on mobile devices.
2.	Random walk path visualization not supported, only searching.

## Algorithms

All the algorithms on this visualizer are adapted to a two-dimensional grid, where ninety degree turns and movements from one node to another have a cost of one. Furthermore, algorithms are either weighted or unweighted, and their weightedness dictates consideration of the aforementioned costs. What’s more, not all algorithms guarantee the shortest path, so be sure to read their descriptions to understand capabilities.

### > [Random walk](https://en.wikipedia.org/wiki/Random_walk)

Random walk is unweighted and does not guarantee the shortest path. This algorithm works by repeatedly choosing and exploring neighbor nodes at random or based on a probability distribution.

*Fun fact:* Random walks have applications in nearly every major field of science.

### > [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search)

Depth-first search is unweighted and does not guarantee the shortest path. This algorithm works by exploring as far as possible along a given path and then backtracking until it finds an unexplored path to be explored.

*Fun fact:* Depth-first search is inefficient at pathfinding because of its dreadful meandering!

### > [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)

Breadth-first search is unweighted and guarantees the shortest path. This algorithm works by exploring all neighbor nodes at the present depth prior to exploring nodes at succeeding depth.

*Fun fact:* Breadth-first search was invented in 1945 by computer scientist Konrad Zuse, in his rejected Ph.D. thesis.

### > [Greedy best-first search](https://en.wikipedia.org/wiki/Best-first_search)

Greedy best-first search is unweighted and does not guarantee the shortest path. This algorithm works by always exploring the most promising node according to heuristics, which estimate closeness of the `FINISH` node.

*Fun fact:* Greedy best-first search uses less memory than A* but does not provide the same optimality guarantee.

### > [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

Dijkstra’s algorithm is weighted and guarantees the shortest path. This algorithm works by constructing a lowest-cost path tree from the set of nodes that have the smallest distance from the `START` to the `FINISH` node.

*Fun fact:* Computer scientist Edsger Dijkstra invented his famous algorithm in roughly twenty minutes at a café.

### > [A* search](https://en.wikipedia.org/wiki/A*_search_algorithm)

A* (A-star) search is weighted and guarantees the shortest path. Like Dijkstra’s algorithm, A* constructs a lowest-cost path tree. However, A* guarantees optimality by using heuristics in conjunction with its lowest-cost path tree.

*Fun fact:* Google Maps uses an A* search coupled with collections of highly advanced heuristics.

## Credits

* [Treact](https://treact.owaiskhan.me) by Owais Khan
* [Twin](https://github.com/ben-rogerson/twin.macro) by Ben Rogerson and contributors
* [iconmonstr](https://iconmonstr.com) by Alexander Kahlkopf
