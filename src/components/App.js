import "./scss/app.scss";
import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Animation from "./Animation";
import Header from "./Header";
import Principal from "./Principal";
import About from "./About";
import Portfolio from "./Portfolio";
import Instruments from "./Instruments";
import Contact from "./Contact";

class App extends Component {
	state = {
		isVisible: true,
		isNone: false
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isVisible: false
			});
		}, 8000);
		setTimeout(() => {
			this.setState({
				isNone: true
			});
		}, 8500);
	}

	render() {
		return (
			<Fragment>
				<Animation
					visible={this.state.isVisible}
					none={this.state.isNone}
				/>
				<BrowserRouter>
					<div>
						<Suspense fallback="loading">
							<Header />
						</Suspense>
						<Route path="/" exact component={Principal} />
						<Route path="/about" exact component={About} />
						<Route path="/portfolio" exact component={Portfolio} />
						<Route
							path="/instruments"
							exact
							component={Instruments}
						/>
						<Route path="/contact-us" exact component={Contact} />
					</div>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
