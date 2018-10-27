import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserWrapper from "./Pages/UserWrapper";
import PrivateRoute from "./Authentication/PrivateRoute";

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
					<AppBar onClick={this.handleSignout}/>
					<Switch>
						<Route exact path="/" component={ Home }/>
						<Route exact path="/signup" component={ Signup }/>
						<Route exact path="/login" component={ Login }/>
						<PrivateRoute excact path="/auth/:user" component={ UserWrapper }/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainRouter;