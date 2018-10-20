import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";

class EditProfile extends Component {
	

	render() {
	  const {classes} = this.props
	  	if (this.state.redirectToProfile) {
			return (<Redirect to={'/user/' + this.state.userId}/>)
	  	}
	  
		return (
			<Card className={classes.card}>
		  		<CardContent>
					<Typography type="headline" component="h2" className={classes.title}>
			  			Edit Profile
					</Typography>
					<TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
					<TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
					<TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
				<br/> 
				{
			  	this.state.error && (
					<Typography component="p" color="error">
						<Icon color="error" className={classes.error}>error</Icon>
							{this.state.error}
			  		</Typography>)
				}
		  		</CardContent>
		  		<CardActions>
					<Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
		  		</CardActions>
			</Card>
	  	)
	}
}
  
  EditProfile.propTypes = {
	classes: PropTypes.object.isRequired
  }

export default EditProfile;