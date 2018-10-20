import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Hidden from "@material-ui/core/Hidden";
import API from "../JS/api-user";

const styles = theme => ({
	root: {
		margin: '15%',
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing.unit,
	},
	withoutLabel: {
		marginTop: theme.spacing.unit * 3,
	},
	textField: {
		marginLeft: theme.spacing.unit,
    	marginRight: theme.spacing.unit,
    	width: 200,
	},
});



class Signup extends Component {

	state = {
		firstName: '',
		lastName: '',
		username: '',
		confirmPassword: '',
		password: '',
		email: '',
		phone: '',
		open: false,
		error: ''
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	clickSubmit = () => {
		const user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone || undefined,
			username: this.state.username,
			password: this.state.password
		}

		API.Create(user)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});

			

	}

	render() {

		const { classes } = this.props;

		return (

			<div className={classes.root}>
				<Grid container>
					<Hidden only={'xs'}>
						<Grid item sm={1} md={1} lg={1} xl={1}>
						</Grid>
					</Hidden>
					<Grid item xs={12} sm={10}>
						<Paper>
							<form>
								<TextField
									id="usernameInput"
									label="Username:"
									name="username"
									className={classes.textField}
									value={this.state.username}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
									InputProps={{
										startAdornment: (
										  <InputAdornment position="start">
											<AccountCircle />
										  </InputAdornment>
										),
									}}
								/>
								<br/>
								<TextField
									id="firstNameInput"
									label="First Name:"
									name="firstName"
									className={classes.textField}
									value={this.state.firstName}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
								/>
								<TextField
									id="lastNameInput"
									label="Last Name:"
									name="lastName"
									className={classes.textField}
									value={this.state.lastName}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
								/>
								<br/>
								<TextField
									id="emailInput"
									label="Email:"
									type="email"
									name="email"
									className={classes.textField}
									value={this.state.email}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
								/>
								<TextField
									id="phoneInput"
									label="Phone:"
									name="phone"
									className={classes.textField}
									value={this.state.phone}
									onChange={this.handleInputChange}
									margin="normal"
								/>
								<br/>
								<TextField
									id="passwordInput"
									label="Password:"
									name="password"
									type="password"
									className={classes.password}
									value={this.state.name}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
								/>
								<TextField
									id="confirmPasswordInput"
									label="Confirm Password:"
									name="confirmPassword"
									type="password"
									className={classes.textField}
									value={this.state.confirmPassword}
									onChange={this.handleInputChange}
									margin="normal"
									required={true}
								/>
								<br/>
								<Button variant="contained" color="primary" onClick={this.clickSubmit} className={classes.textField}>
									Submit
								</Button>
							</form>
						</Paper>
					</Grid>
					<Hidden only={'xs'}>
						<Grid item sm={1} md={1} lg={1} xl={1}>						
						</Grid>
					</Hidden>
				</Grid>
			</div>
		)
	}
}

Signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withWidth: true })(Signup);