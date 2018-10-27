import React from "react";
import { withRouter } from "react-router-dom";
import UserAuth from "../Authentication/Auth-Helper";

const SignoutButton = withRouter(({ history }) =>
		  <span
			onClick={() => {
			  UserAuth.Signout(() => history.push("/"));
			}}
		  >
			Sign out
		  </span>		
);

export default SignoutButton;