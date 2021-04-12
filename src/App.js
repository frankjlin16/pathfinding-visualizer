import "style.css";
import "tailwindcss/dist/base.css";

import Algorithms from "pathfinder/Algorithms";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "pathfinder/Footer";
import Header from "pathfinder/Header";
import Pathfinder from "pathfinder/Pathfinder";
import React from "react";

function App() {
	return (
		<AnimationRevealPage>
			<Header />
			<Pathfinder />
			<Algorithms />
			<Footer />
		</AnimationRevealPage>
	);
}

export default App;
