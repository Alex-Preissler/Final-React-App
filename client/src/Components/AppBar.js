import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button"
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SignoutButton from "./SignoutButton";
import UserAuth from "../Authentication/Auth-Helper";

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
		marginLeft: -12,
		marginRight: 20,
		marginTop: 5,
		paddingTop: 5
	}
};



class MainAppBar extends React.Component {

	state = {
		anchorEl: null,
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
		console.log(event.currentTarget);
	};

	handleClose = (event) => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<AppBar position="static" className={classes.root}>
				<Grid container>
					<Grid item xs={12} sm={2}>
						<Typography component="h4" variant="h4" className={classes.grow}>
							A.I.O.
            			</Typography>
					</Grid>
					<Hidden only={'xs'}>
						<Grid item sm={8}>
						</Grid>
					</Hidden>
					<Grid item xs={12} sm={2}>
						<Toolbar>
							{!UserAuth.isAuthenticated && (
								<div>
									<Link to="/signup">
										<Button>
											Signup
										</Button>
									</Link>
									<Link to="/login">
										<Button>
											Login
										</Button>
									</Link>
								</div>
							)}
							{UserAuth.isAuthenticated && (
								<div>
									<IconButton
										aria-owns={open ? "menu-appbar" : null}
										aria-haspopup="true"
										onClick={this.handleMenu}
										color="inherit"
									>
										<AccountCircle />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right"
										}}
										transformOrigin={{
											vertical: "top",
											horizontal: "right"
										}}
										open={open}
										onClose={this.handleClose}
									>
										<MenuItem onClick={this.handleClose}>Profile</MenuItem>
										<MenuItem onClick={this.handleClose}>My Account</MenuItem>
										<MenuItem onClick={ this.onClick }><SignoutButton/></MenuItem>
									</Menu>
								</div>
							)}
						</Toolbar>
					</Grid>
				</Grid>
			</AppBar>
		);
	};
}

MainAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withWidth: true })(MainAppBar);