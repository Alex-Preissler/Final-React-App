import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import API from "../auth/api-user";

class Signup extends Component {
	
	state = {
		name: '',
		password: '',
		email: '',
		open: false,
		error: ''
	}

	handleChange = name => event => {
		this.setState({[name]: event.target.value})
	}
	
	clickSubmit = () => {
		const user = {
			name: this.state.name || undefined,
			email: this.state.email || undefined,
			password: this.state.password || undefined
		}
		API.Create(user).then((data) => {
			if (data.error) {
				this.setState({error: data.error})
		  	} else {
				this.setState({error: '', open: true})
		  	}
		})
	}
	
	  render() {
		return (<div>
			<Card>
				<CardContent>
			  		<Typography variant="body1">
						Sign Up
			  		</Typography>
			  		<TextField id="name" label="Name" value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
			  		<TextField id="email" type="email" label="Email" value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
			  		<TextField id="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
				  <br/> 
				{
					this.state.error && (<Typography component="p" color="error">
				  	<Icon color="error">error</Icon>
				  	{this.state.error}</Typography>)
			  	}
				</CardContent>
				<CardActions>
			  		<Button color="primary" variant="contained" onClick={this.clickSubmit}>Submit</Button>
				</CardActions>
		  	</Card>
		  	<Dialog open={this.state.open} disableBackdropClick={true}>
				<DialogTitle>
					New Account
				</DialogTitle>
				<DialogContent>
			  		<DialogContentText>
						New account successfully created.
			  		</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Link to="/signin">
						<Button color="primary" autoFocus="autoFocus" variant="contained">
				  			Sign In
						</Button>
			  		</Link>
				</DialogActions>
		  	</Dialog>
		</div>)
	  }
	}

export default Signup;