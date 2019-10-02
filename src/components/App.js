import "./scss/app.scss";

import React, { Component } from "react";

import Header from "./Header";
import Animation from "./Animation";

class App extends Component {
	state = {
		isVisible: true
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isVisible: false
			});
		}, 8000);
	}
	render() {
		return (
			<main>
				<Animation visible={this.state.isVisible} />
				<Header />
			</main>
		);
	}
}

export default App;
