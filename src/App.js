import "style.css";
import "tailwindcss/dist/base.css";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "pathfinder/Footer";
import Header from "pathfinder/Header";
import Pathfinder from "pathfinder/Pathfinder";
import React from "react";

function App() {
	return (
		<AnimationRevealPage disabled>
			<Header />
			<Pathfinder />
			<Footer />
		</AnimationRevealPage>
	);
}

export default App;
