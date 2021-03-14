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

						{/* Nav */}
						<nav id="nav">
							<ul>
								<li>
									<a href="index.html">START [SELECTED ALOGRITHM]</a>
								</li>
								<li>
									<a href="left-sidebar.html">CLEAR GRID</a>
								</li>
								<li>
									<a href="right-sidebar.html">CLEAR WALLS</a>
								</li>
								<li>
									<a href="two-sidebar.html">GENERATE MAZE</a>
								</li>
								<li>
									<a href="two-sidebar.html">SPEED</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				{/* Banner */}
				<div id="banner" class="container">
					<Pathfinder />
				</div>

				{/* Slider */}
				{/* <div id="slider" class="container">
					<a href="#">
						<span class="previous-button icon solid fa-angle-left"></span>
					</a>
					<a href="#">
						<span class="next-button icon solid fa-angle-right"></span>
					</a>
					<div class="viewer">
						<div class="reel">
							<div class="slide">
								<span class="pennant">
									<span class="icon solid fa-rocket"></span>
								</span>
								<p>Phasellus ultrices nulla quis nibh. Quisque a lectu. Donec consectetuer ligula et vulputate.</p>
								<a href="#" class="links">
									More
								</a>
							</div>
							<div class="slide">
								<span class="pennant">
									<span class="icon solid fa-cogs"></span>
								</span>
								<p>Etiam neque. Vivamus consequat lorem. Nullam semper eleifend. Donec mattis libero eget urna.</p>
								<a href="#" class="links">
									More
								</a>
							</div>
							<div class="slide">
								<span class="pennant">
									<span class="icon solid fa-file"></span>
								</span>
								<p>Maecenas pede nisl, elementum eu, ornare ac, malesuada at, erat. Proin gravida orci porttitor.</p>
								<a href="#" class="links">
									More
								</a>
							</div>
						</div>
					</div>
				</div> */}

				{/* Main */}
				<div id="main" class="container">
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
					{/* <div id="intro">
						<section>
							<div class="heading">
								<span class="txt1">Fusce pellentesque</span>
								<span class="txt2">Integer vitae libero ac risus egestas placerat</span>
							</div>
						</section>
					</div>

					<div id="extra">
						<div class="row gtr-200">
							<section class="col-4 col-12-narrower">
								<span class="pennant">
									<span class="icon solid fa-tint"></span>
								</span>
								<div class="box">
									<p>
										Praesent dapibus, neque id fio intion supendibus, tortor neque egestas augu uspendisse urna vulputate magna eros. Aliquam erat volut enean
										dignissim pellentesque felis
									</p>
								</div>
								<a href="#" class="link">
									More Info
								</a>
							</section>
							<section class="col-4 col-12-narrower">
								<span class="pennant">
									<span class="icon solid fa-pencil-alt"></span>
								</span>
								<div class="box">
									<p>
										Donec nec justo eget felis fafermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim arcuat uspendisse urna pellentesqu,
										tincidunt quis, accumsan porttitor, facilisis
									</p>
								</div>
								<a href="#" class="link">
									More Info
								</a>
							</section>
							<section class="col-4 col-12-narrower">
								<span class="pennant">
									<span class="icon solid fa-user"></span>
								</span>
								<div class="box">
									<p>
										Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies ciam nibh, viverra non, semper suscipi
										uspendisse mitind vulputate simpoem
									</p>
								</div>
								<a href="#" class="link">
									More Info
								</a>
							</section>
						</div>
					</div> */}
				</div>

				{/* Newsletter */}
				{/* <div id="newsletter" class="container">
					<section>
						<header>
							<h2>Morbi insem uisdui</h2>
							<span class="byline">Vivamus vestibulum nulla nec ante</span>
						</header>
						<form method="post" action="#" id="subscribe">
							<input type="text" class="text" name="search" placeholder="Email address" />
							<a href="#" class="button">
								Submit
							</a>
						</form>
					</section>
				</div> */}

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
