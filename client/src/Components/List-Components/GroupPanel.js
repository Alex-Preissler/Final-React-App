import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import ItemList from "./ItemList";
import Modal from "./AddListItemModal";
import API from "../../JS/api-cleaning";

const styles = theme => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	sublist: {
		margin: '2px',
	}
});


class GroupPanel extends Component {

	constructor(props) {
		super(props);

		const { lists } = this.props;

		this.state = {
			subListIds: lists,
			lists: [],
			expanded: null
		}
	}

	componentWillMount() {
		API.ReadListItems(this.state.subListIds)
			.then(res => {
				console.log(res.data);
				this.setState({
					lists: res.data
				})
			})
	}

	handleDayExpansion = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

	addListItem = (newItem) => {
		const index = newItem.index;

		API.CreateItem(newItem)
			.then(res => {
				let length = (res.items.length - 1);
				let item = res.items[length];
				
				let old = this.state.lists;
					old[index].items.push(item);

				this.setState({
					lists: old
				});
			
			})
			.catch(err => {

			})
	}

	render() {

		const { classes } = this.props;
		const { lists, expanded } = this.state;

		return (
			lists.map((value, index) => (
				<Grid item sm={3} md={3} lg={3} xl={3} className={classes.sublist}>
					<ExpansionPanel key={value._id} expanded={expanded === value._id} onChange={this.handleDayExpansion(value._id)}>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography className={classes.heading}>General settings</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<ItemList lists={value.items} />
						</ExpansionPanelDetails>
						<ExpansionPanelActions>
							<Modal onClick={this.addListItem} value={value._id} index={index}/>
						</ExpansionPanelActions>
					</ExpansionPanel>
				</Grid>
			))
		)
	}
}

GroupPanel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupPanel);