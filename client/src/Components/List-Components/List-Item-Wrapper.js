import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DayPanel from "./DayPanel";
import Modal from "./AddListModal";
import API from "../../JS/api-cleaning";

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	button: {
		margin: theme.spacing.unit,
		float: 'right'
	},
});


class ListItemWrapper extends Component {

	constructor(props) {
		super(props);

		const { cleaning } = JSON.parse(sessionStorage.getItem("usr"));

		console.log(cleaning);

		this.state = {
			lists: cleaning,
		}
	}

	addListItem = (newItem) => {
		
		API.Create(newItem)
			.then(res => {
				
			})
			.catch(err => {

			})
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<DayPanel lists={this.state.lists}/>
				<Modal onClick={this.addListItem}/>
			</div>
		)
	}
}

ListItemWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles({ withTheme: true })(ListItemWrapper);