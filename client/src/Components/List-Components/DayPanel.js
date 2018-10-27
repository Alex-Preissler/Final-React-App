import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from "@material-ui/core/Divider";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import GroupPanel from "./GroupPanel";
import Modal from "./AddSublistModal";
import Moment from "moment";
import API from "../../JS/api-cleaning";


const styles = theme => ({
	root: {
		width: '100%',
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
});


class DayPanel extends Component {

	constructor(props) {
		super(props);

		const { lists } = this.props;

		console.log(lists);

		this.state = {
			listIds: lists,
			lists: [],
			expanded: null,
			edit: false,
		}
	}

	componentWillMount() {

			API.ReadListInfo(this.state.listIds)
				.then(res => {
					console.log(res);
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

	addSubList = (newSublist) => {
		API.CreateSublist(newSublist)
			.then(res => {
				let index = newSublist.index;
				this.state.list[index].sublist.push(res);
			})
	}

	deleteListItem = (e) => {
		let id = e.target.getAttribute("value");
		API.Delete(id)
			.then(res => {

			})
	}

	render() {

		const { classes } = this.props;
		const { lists, expanded, edit } = this.state;
		const subListArray = [];
		

		return (
			lists.map((value, index) => (

				<ExpansionPanel key={value._id} expanded={expanded === value._id} onChange={this.handleDayExpansion(value._id)}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{Moment(value.listDate).format('MM/D/YYYY')}</Typography>
						<Typography className={classes.secondaryHeading}>{value.listName}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container>
							<GroupPanel lists={value.sublist}/>
							<Grid item>
								<Modal onClick={this.addSubList} value={value._id} index={index}/>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
					<Divider />
					<ExpansionPanelActions>
						<Button variant="contained" color="primary" className={classes.button}>
							Edit
        					<EditIcon className={classes.rightIcon} />
						</Button>
						<Button variant="contained" color="secondary" value={value._id} onClick={(e) => this.deleteListItem(e)} className={classes.button}>
							<span value={value._id}>Delete</span>
        					<DeleteIcon value={value._id} className={classes.rightIcon} />
						</Button>
					</ExpansionPanelActions>
				</ExpansionPanel>
			))
		)
	}
}

DayPanel.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DayPanel);