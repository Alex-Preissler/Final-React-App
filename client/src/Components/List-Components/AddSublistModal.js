import React from 'react';
import Moment from "moment";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";


function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
	button: {
		margin: theme.spacing.unit,
		float: 'right'
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

class SimpleModal extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			subListTitle: ''
		}

		this.clickSubmit = props.onClick;
		console.log(props);
	}


	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = (e) => {

		const isNew = e.target.getAttribute("value");
		const listId = e.target.getAttribute("list");
		const index = e.target.getAttribute("index");

		if(isNew === "true") {
			const newItem = {
				subListTitle: this.state.subListTitle,
				_id: listId,
				index: index
			};
			
			this.clickSubmit(newItem);
		}

		this.setState({ open: false });
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		
		this.setState({
			[name]: value
		});
	};


	render() {

		const { classes, value, index } = this.props;

		return (
			<div>
				<Button onClick={this.handleOpen} variant="extendedFab" color="primary" aria-label="Add" className={classes.button}>
					<AddIcon className={classes.extendedIcon} />
					New Sublist
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
				>
					<div style={getModalStyle()} className={classes.paper}>
						<Typography variant="h6" id="modal-title">
							Create A New List!
            			</Typography>
						<form>
							<TextField
								id="sublistTitle"
								label="Title:"
								name="subListTitle"
								value={this.state.subListTitle}
								className={classes.textField}
								onChange={this.handleInputChange}
								margin="normal"
								required={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>
							<br />
							<Button variant="contained" color="primary" onClick={(e) => this.handleClose(e)} className={classes.textField}>
								<Typography value={false}>Cancel</Typography>
							</Button>
							<Button variant="contained" color="primary" onClick={(e) => this.handleClose(e)} className={classes.textField}>
								<Typography value={true} list={value} index={index}>Create!</Typography>
							</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

SimpleModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(SimpleModal);

