import React from "react";
import { Route, Redirect } from "react-router-dom";
import API from "./api-auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route { ...rest } render={ props => (
		API.IsAuthenticated() ? (
			<Component { ...props }/>
		) : (
			<Redirect to={{
				pathname: "/signin",
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default PrivateRoute;