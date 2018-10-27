import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RemoveBtn from "@material-ui/icons/RemoveCircleRounded";
import API from "../../JS/api-cleaning";

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});



class ItemList extends Component {

	constructor(props) {
		super(props);

		const { lists } = this.props;

		this.state = {
			lists: lists,
			checked: []
		}
	}

	componentWillMount() {
		const { lists } = this.props;
		console.log(lists);
	}

	handleItemCheck = (value) => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked
		});
	};

	render() {

		const { classes } = this.props;
		const { lists, checked } = this.state;

		return (
			<List>
				{lists.map(value => {

					return (
						<ListItem
							key={value}
							value={value}
							role={undefined}
							dense
							button
							onClick={this.handleItemCheck(value)}
							className={classes.listItem}
						>
							<Checkbox
								checked={checked.indexOf(value) !== -1}
								tabIndex={-1}
								disableRipple
							/>
							<ListItemText primary={value.listItem}/>
							<ListItemSecondaryAction>
								<IconButton aria-label="Comments">
									<RemoveBtn />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					)
				})}
			</List>
		)
	}
}

ItemList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ItemList);