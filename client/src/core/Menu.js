import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link, withRouter } from "react-router-dom";

const Menu = withRouter(({history}) => (

	<AppBar>
		<ToolBar>
			<Typography>
				All In One Planner
			</Typography>
			<Link to="/">
				<IconButton>
					<HomeIcon/>
				</IconButton>
			</Link>
		</ToolBar>
	</AppBar>
))

export default Menu;