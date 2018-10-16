import React, { Component } from "react";
import List, { ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

class Users extends Component {
	state = {
		users: []
	}
  
	componentDidMount() {
	  list().then((data) => {
		if (data.error) {
		  console.log(data.error)
		} else {
		  this.setState({users: data})
		}
	  })
	}
  
	render() {
	  const {classes} = this.props
	  
		return (
			<Paper className={classes.root} elevation={4}>
		  		<Typography type="title" className={classes.title}>
					All Users
		  		</Typography>
		  	<List dense>
		   	{this.state.users.map((item, i) => {
			return(
				<Link to={"/user/" + item._id} key={i}>
					<ListItem button>
						<ListItemAvatar>
							<Avatar>
								<Person/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={item.name}/>
						<ListItemSecondaryAction>
							<IconButton>
								<ArrowForward/>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Link>
			)})
			}
		  		</List>
			</Paper>
	  )
	}
  }
  
  Users.propTypes = {
	classes: PropTypes.object.isRequired
  }

  export default Users;