import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./core/Menu";
import Home from "./core/Home";
class MainRouter extends Component {

	render() {
		return(
			<div>
				<Menu/>
				<Switch>
					<Route exact path="/" Component={ Home }/>
				</Switch>
			</div>
		)
	}
}

export default MainRouter;