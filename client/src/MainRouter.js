import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserWrapper from "./Pages/UserWrapper";


class MainRouter extends Component {

	componentDidMount() {
		const jssStyles = document.getElementById('jss-server-side')
		if (jssStyles && jssStyles.parentNode) {
		  	jssStyles.parentNode.removeChild(jssStyles)
		}
	}

	render() {
		return(
			<Router>
				<div>
					<AppBar/>
					<Switch>
						<Route exact path="/" component={ Home }/>
						<Route path="/signup" component={ Signup }/>
						<Route path="/login" component={ Login }/>
						<Route path="/:user/home" component={ UserWrapper }/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainRouter;