import "./App.css";
import Pathfinder from "./pathfinder/pathfinder";

function App() {
	return (
		<div>
			<div id="page-wrapper">
				{/* Header */}
				<div id="header">
					<div class="container">
						{/* Logo */}
						<div id="logo">
							<div>
								<h1>
									<a href="#">Pathfinding Visualizer</a>
								</h1>
								<span>By Alek Broman</span>
							</div>
						</div>

						<nav id="nav" style={{ backgroundColor: "white" }}>
							<ul>
								<li>
									<div style={{ color: "#2b475d" }}>
										START NODE <div class="node node-tutorial node-start" />
									</div>
								</li>
								<li>
									<div style={{ color: "#2b475d" }}>
										FINISH NODE <div class="node node-tutorial node-finish" />
									</div>
								</li>
								<li>
									<div style={{ color: "#2b475d" }}>
										WALL NODE <div class="node node-tutorial node-wall" />
									</div>
								</li>
								<li>
									<div style={{ color: "#2b475d" }}>
										VISITED NODE <div class="node node-tutorial node-visited" />
									</div>
								</li>
								<li>
									<div style={{ color: "#2b475d" }}>
										PATH NODE <div class="node node-tutorial node-path" />
									</div>
								</li>
							</ul>
						</nav>

						{/* Nav */}
						<nav id="nav">
							<ul>
								<li>
									<button href="index.html">START [SELECTED ALOGRITHM]</button>
								</li>
								<li>
									<button href="left-sidebar.html">CLEAR GRID</button>
								</li>
								<li>
									<button href="right-sidebar.html">CLEAR WALLS</button>
								</li>
								<li>
									<button href="two-sidebar.html">GENERATE MAZE</button>
								</li>
								<li>
									<button href="two-sidebar.html">SPEED</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				{/* Banner */}
				<div id="banner" class="container">
					<Pathfinder />
				</div>

				{/* Main */}
				<div id="main" class="container">
					<div id="intro">
						<section>
							<div class="heading">
								<span class="txt1">Meet the algorithms</span>
								<span class="txt2">Select any of the algorithms below to get visualizing!</span>
							</div>
						</section>
					</div>
					<div id="featured">
						<div class="row gtr-uniform">
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Dijkstra's algorithm</h3>
								<p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Algorithm #2</h3>
								<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Algorithm #3</h3>
								<p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Algorithm #4</h3>
								<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Algorithm #5</h3>
								<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
							<section class="col-6 col-12-narrower">
								{/* <a href="#" class="image"><img src="images/placeholder.png" alt=""></a> */}
								<h3>Algorithm #6</h3>
								<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
								<a href="#" class="link2">
									SELECT<span class="icon solid fa-plus-circle"></span>
								</a>
							</section>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div id="footer" class="container">
					<div class="row">
						<div class="col-12">
							<span class="copyright">2020 – 2021 &copy; Alek Broman. All rights reserved.</span>
							<ul class="icons">
								<li>
									<a href="https://alekbroman.com" class="icon solid fa-cloud">
										<span>Personal Website</span>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/alekbroman" class="icon brands fa-linkedin">
										<span>LinkedIn</span>
									</a>
								</li>
								<li>
									<a href="https://github.com/polymods" class="icon brands fa-github">
										<span>GitHub</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Scripts */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.slidertron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
		</div>
	);
}

export default App;
