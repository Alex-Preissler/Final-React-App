import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserAuth from "./Auth-Helper";


const PrivateRoute = ({ path: Path, component: Component, ...rest }) => {
	return(
		<Route 
			{...rest}
			render={props => 
				UserAuth.isAuthenticated ? (
					<Component {...props} />
				
				) : ( 
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute;