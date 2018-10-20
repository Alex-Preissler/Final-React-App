import React, { Component } from "react";
import PropTypes from "prop-types";


class Profile extends Component {
	
	componentWillReceiveProps = (props) => {
	  this.init(props.match.params.userId)
	}
	componentDidMount = () => {
	  this.init(this.match.params.userId)
	}
	render() {
		return(
			<div></div>
		)
	}
}
  
Profile.propTypes = {
	classes: PropTypes.object.isRequired
}

export default Profile;