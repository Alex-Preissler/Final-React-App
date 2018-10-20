import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";



class Signin extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		redirectToReferrer: false
	}
  
	clickSubmit = () => {
		/*const user = {
			email: this.state.email || undefined,
			password: this.state.password || undefined
		}*/
	}
  
	handleChange = name => event => {
		this.setState({[name]: event.target.value})
	}
  
	render() {
	  
	  	const {from} = this.props.location.state || {
			from: {
		  		pathname: '/'
			}
	  	}
	  	const {redirectToReferrer} = this.state
	  		if (redirectToReferrer) {
			return (<Redirect to={from}/>)
	  	}
  
	return (
		<Card>
		  	<CardContent>
				<Typography type="headline" component="h2">
			  		Sign In
				</Typography>
				<TextField id="email" type="email" label="Email"  value={this.state.email} onChange={this.handleChange('email')} margin="normal"/>
				<br/>
				<TextField id="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
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
	)}
}
  
export default Signin;