import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";
import UserAuth from "../Authentication/Auth-Helper";



class Login extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		redirectToReferrer: false
	}
  
	clickSubmit = () => {
		const user = {
			email: this.state.email,
			password: this.state.password
		}

		console.log(user);

		UserAuth.Authenticate(user, res => {
			if(res === true) {
				this.setState({
					redirectToReferrer: res
				})
			}else{
				this.setState({
					error: "Invalid Email/Password."
				})
			}
		});
			
	}

	handleInputChange = event => {

		const { name, value } = event.target;

		this.setState({[name]: value});
	}
  
	render() {
	  
	const to = "/" + UserAuth._id;     
	console.log(this.props.location.state);
	const { redirectToReferrer } = this.state;
		  
	if (redirectToReferrer) {
		return (<Redirect to={to}/>)
	};
  
	return (
		<Card>
		  	<CardContent>
				<Typography type="headline" component="h2">
			  		Sign In
				</Typography>
				<TextField id="email" type="email" label="Email"  name="email" value={this.state.email} onChange={ this.handleInputChange } margin="normal"/>
				<br/>
				<TextField id="password" type="password" label="Password" name="password" value={this.state.password} onChange={ this.handleInputChange } margin="normal"/>
				<br/> 
				{
			  		this.state.error && (
						<Typography component="p" color="error">
							<Icon color="error">error</Icon>
								{this.state.error}
					  	</Typography>
					)
				}
		  	</CardContent>
		  	<CardActions>
				<Button color="primary" variant="contained" onClick={this.clickSubmit}>Submit</Button>
		  	</CardActions>
		</Card>
		)
	}
}
  
export default Login;