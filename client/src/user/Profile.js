import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import Person from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import { Redirect, Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import API from "../auth/api-user";
import auth from "../auth/api-auth";

class Profile extends Component {
	constructor({match}) {
	  super()
	  this.state = {
		user: '',
		redirectToSignin: false
	  }
	  this.match = match
	}
	init = (userId) => {
	  const jwt = API.auth.isAuthenticated()
	  API.read({
		userId: userId
	  }, {t: jwt.token}).then((data) => {
		if (data.error) {
		  this.setState({redirectToSignin: true})
		} else {
		  this.setState({user: data})
		}
	  })
	}
	componentWillReceiveProps = (props) => {
	  this.init(props.match.params.userId)
	}
	componentDidMount = () => {
	  this.init(this.match.params.userId)
	}
	render() {
		const {classes} = this.props
		const redirectToSignin = this.state.redirectToSignin
		if (redirectToSignin) {
			return <Redirect to='/signin'/>
	  	}
	  	return (
			<Paper className={classes.root} elevation={4}>
		  		<Typography type="title" className={classes.title}>
					Profile
		  		</Typography>
		  		<List dense>
					<ListItem>
			  			<ListItemAvatar>
							<Avatar>
				  				<Person/>
							</Avatar>
			  			</ListItemAvatar>
			  			<ListItemText primary={this.state.user.name} secondary={this.state.user.email}/> {
			   				auth.isAuthenticated().user && auth.isAuthenticated().user._id === this.state.user._id && 
							(
								<ListItemSecondaryAction>
				  					<Link to={"/user/edit/" + this.state.user._id}>
										<IconButton aria-label="Edit" color="primary">
					  						<Edit/>
										</IconButton>
				  					</Link>
				  					<DeleteUser userId={this.state.user._id}/>
								</ListItemSecondaryAction>
							)
			  			}
					</ListItem>
						<Divider/>
					<ListItem>
			  			<ListItemText primary={"Joined: " + (new Date(this.state.user.created)).toDateString()}/>
					</ListItem>
		  		</List>
			</Paper>
	  	)
	}
}
  
Profile.propTypes = {
	classes: PropTypes.object.isRequired
}

export default Profile;