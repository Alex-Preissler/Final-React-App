import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import UserNav from "../Components/UserNav";
import UserHome from "../Components/UserHome";
import Shopping from "../Components/Shopping";
import Calendar from "../Components/Calendar";
import Cleaning from "../Components/Cleaning";
import Workouts from "../Components/Workouts";
import Meals from "../Components/Meals";




const styles = theme => ({
	mainView: {
		maxHeight: '100%'
	}
});


class UserWrapper extends Component {

	state = {
		view: 0
	}

	componentDidMount() {

		this.renderView();
		
	}

	changeView = (value) => {

		let newView = value;

		console.log(value);
	
		this.setState({ view: newView });
		this.renderView();
	}

	renderView = () => {
		let currentView = this.state.view;

		if(currentView === 0) {
			return(<UserHome/>);
		}

		if(currentView === 1) {
			return(<Cleaning/>)
		}

		if(currentView === 2) {
			return(<Meals/>);
		}

		if(currentView === 3) {
			return(<Shopping/>);
		}

		if(currentView === 4) {
			return(<Workouts/>);
		}

		if(currentView === 5) {
			return(<Calendar/>);
		}
	}

	render() {
		const { classes } = this.props;

		return(
			<Grid container className={ classes.mainView }>
				<Grid item md={3} lg={2} xl={2}>
					<UserNav onClick={this.changeView}></UserNav>
				</Grid>
				<Grid item md={9} lg={10} xl={10}>
					{this.renderView()}
				</Grid>
			</Grid>
		);
	}


}

UserWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UserWrapper);