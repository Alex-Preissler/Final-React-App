import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./core/AppBar";
import Home from "./core/Home";
import Users from "./user/Users";
import Signup from "./user/Signup";
import Signin from "./auth/Signin";
import EditProfile from "./user/EditProfile";
import Profile from "./user/Profile";
import PrivateRoute from "./auth/PrivateRoute";


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
						<Route exact path="/"/>
						<Route path="/users" component={ Users }/>
						<Route path="/signup" component={ Signup }/>
						<Route path="/signin" component={ Signin }/>
						<PrivateRoute path="/user/edit/:userId" component={ EditProfile }/>
						<Route path="/user/:userId" component={ Profile }/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainRouter;