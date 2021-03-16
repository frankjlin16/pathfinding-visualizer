import "./App.css";
import Pathfinder from "./pathfinder/pathfinder";

function App() {
	return (
		<div>
			{/* Page Wrapper */}
			<div id="page-wrapper">
				{/* Header */}
				<header id="header">
					<h1>
						<a href="index.html">
							Pathfinding Visualizer <span>by Alek Broman</span>
						</a>
					</h1>
					{/* <nav>
						<a href="#menu">Menu</a>
					</nav> */}
				</header>

				{/* Menu */}
				<nav id="menu">
					<div class="inner">
						<h2>Menu</h2>
						<ul class="links">
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="generic.html">Generic</a>
							</li>
							<li>
								<a href="elements.html">Elements</a>
							</li>
							<li>
								<a href="#">Log In</a>
							</li>
							<li>
								<a href="#">Sign Up</a>
							</li>
						</ul>
					</div>
				</nav>

				{/* Main */}
				<div id="main">
					{/* Banner */}
					<section id="banner">
						<header>
							<h2>Welcome to Pathfinding Visualizer!</h2>
							<p>
								Welcome to Pathfinding Visualizer! I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them
								in action. I hope that you enjoy playing around with this visualization tool just as much as I enjoyed building it.
							</p>
						</header>

						<footer>
							<ul class="actions special">
								<li>
									<a class="button large tutorial">
										Start node <div class="node start tutorial" />
									</a>
								</li>
								<li>
									<a class="button large tutorial">
										Finish node <div class="node finish tutorial" />
									</a>
								</li>
								<li>
									<a class="button large tutorial">
										Wall node <div class="node wall tutorial" />
									</a>
								</li>
								<li>
									<a class="button large tutorial">
										Visited node <div class="node visited tutorial" />
									</a>
								</li>
								<li>
									<a class="button large tutorial">
										Path node <div class="node path tutorial" />
									</a>
								</li>
							</ul>

							<div style={{ fontSize: "0" }}>
								<Pathfinder />
							</div>

							<ul class="actions special bottom">
								<li>
									<a href="#" class="button large">
										Start A*
									</a>
								</li>
								<li>
									<a href="#" class="button large">
										Clear grid
									</a>
								</li>
								<li>
									<a href="#" class="button large">
										Clear walls
									</a>
								</li>
								<li>
									<a href="#" class="button large">
										Generate maze
									</a>
								</li>
							</ul>
						</footer>
					</section>

					{/* One */}
					<section id="one" class="features">
						<header class="major">
							<h2>Meet the algorithms</h2>
							<p>
								Mauris lectus odio, mattis nec velit eu, luctus dictum diam. Quis
								<br />
								tempus que ornare purus a bibendum ultricies.
							</p>
						</header>
						<div class="content">
							<section class="feature">
								<span class="icon major fa-gem"></span>
								<h3>Etiam sed feugiat</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
							<section class="feature">
								<span class="icon major fa-save"></span>
								<h3>Ipsum et bibendum</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
							<section class="feature">
								<span class="icon major fa-newspaper"></span>
								<h3>Sit lorem aliquam</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
							<section class="feature">
								<span class="icon major fa-gem"></span>
								<h3>Etiam sed feugiat</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
							<section class="feature">
								<span class="icon major fa-save"></span>
								<h3>Ipsum et bibendum</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
							<section class="feature">
								<span class="icon major fa-newspaper"></span>
								<h3>Sit lorem aliquam</h3>
								<p>
									Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
									vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.
								</p>
								<a href="#" class="button large">
									Select +
								</a>
							</section>
						</div>
					</section>

					{/* Two */}
					{/* <section id="two" class="spotlight">
						<div class="image">
							<img src="images/pic01.jpg" alt="" />
						</div>
						<div class="content">
							<h2>Volutpat ante libero</h2>
							<p>
								Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
								vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.
							</p>
						</div>
					</section> */}

					{/* Three */}
					{/* <section id="three" class="spotlight alt">
						<div class="image">
							<img src="images/pic02.jpg" alt="" />
						</div>
						<div class="content">
							<h2>Elit auctor tempus</h2>
							<p>
								Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
								vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.
							</p>
						</div>
					</section> */}

					{/* Four */}
					{/* <section id="four" class="spotlight">
						<div class="image">
							<img src="images/pic03.jpg" alt="" />
						</div>
						<div class="content">
							<h2>Porta vestibulum</h2>
							<p>
								Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
								vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.
							</p>
						</div>
					</section> */}

					{/* Five */}
					{/* <section id="five" class="cta">
						<header>
							<h2>Sed euismod nullam</h2>
							<p>
								Odio mattis nec velit eu, luctus dictum diam. Quis
								<br />
								tempus que ornare purus a bibendum ultricies
							</p>
						</header>
						<ul class="actions special">
							<li>
								<a href="#" class="button large">
									Get Started
								</a>
							</li>
						</ul>
					</section> */}
				</div>

				{/* Footer */}
				<section id="footer">
					<div class="inner">
						<section class="about">
							<h3>Proin sed ultricies</h3>
							<p>
								Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin
								vulputate.
							</p>
							<ul class="actions">
								<li>
									<a href="#" class="button">
										Learn More
									</a>
								</li>
							</ul>
						</section>
						<section>
							<h3>Get in Touch</h3>
							<ul class="contact">
								<li class="icon solid fa-phone">(000) 000-0000</li>
								<li class="icon solid fa-envelope">
									<a href="#">information@untitled.tld</a>
								</li>
								<li class="icon brands fa-twitter">
									<a href="#">@untitled-tld</a>
								</li>
								<li class="icon brands fa-facebook-f">
									<a href="#">facebook.com/untitled</a>
								</li>
							</ul>
						</section>
						<section>
							<h3>Mailing Address</h3>
							<p>
								Untitled Corp
								<br />
								1234 Fictional Road
								<br />
								Suite 5432
								<br />
								Nashville, TN 00000
								<br />
								USA
							</p>
						</section>
					</div>
					<div class="copyright">
						<p>Copyright &copy; Untitled Corp. All rights reserved.</p>
					</div>
				</section>
			</div>

			{/* Scripts */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
		</div>
	);
}

export default App;
