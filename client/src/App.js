import React from "react";
import MainRouter from "./MainRouter";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
  	root: {
    	textAlign: 'center',
  	},
});


class APP extends React.Component {
	  
	state = {
		open: false,
	};

	render() {
    	const { classes } = this.props;

    	return (
      		<div className={classes.root}>
        		<MainRouter/>
      		</div>
    	);
  	}
}

APP.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(APP));