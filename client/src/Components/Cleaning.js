import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemWrapper from "./List-Components/List-Item-Wrapper";


const styles = theme => ({
	root: {
	  width: '100%',
	  backgroundColor: theme.palette.background.paper,
	},
	nested: {
	  paddingLeft: theme.spacing.unit * 4,
	},
  });


class Cleaning extends Component {

	state = {
		open: true,
	  };
	
	  handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	  };

	render() {

		const { classes } = this.props;

		return(
			<div className={classes.root}>
				<ListItemWrapper/>
      		</div>
		)
	}
}

Cleaning.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Cleaning);

