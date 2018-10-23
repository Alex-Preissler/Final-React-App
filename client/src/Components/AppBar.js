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
import { Redirect,  Link, withRouter } from "react-router-dom";
import UserAuth from "../Authentication/Auth-Helper";

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
		marginLeft: -12,
		marginRight: 20
	}
};



class MainAppBar extends React.Component {

	state = {
		anchorEl: null,
		signout: true
	};



	handleChange = event => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
		console.log(event.currentTarget);
	};

	handleClose = (event) => {
		this.setState({ anchorEl: null });
	};

	handleSignout = event => {
		UserAuth.Signout(res => {
			if(res === true) {
				return this.setState({ singout: true });
			}
		})
	}

	render() {
		const { classes } = this.props;
		const { anchorEl, signout } = this.state;
		const open = Boolean(anchorEl);

		if(this.state.signout) {
			this.setState({ signout: false });
			return <Redirect to="/home"/>
		}

		return (
			<AppBar position="static" className={classes.root}>
				<Grid container>
					<Grid item xs={12} sm={2}>
						<Typography component="h4" variant="h4" className={classes.grow}>
							App Name Here
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
										<MenuItem onClick={this.handleClose}>Signout</MenuItem>
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