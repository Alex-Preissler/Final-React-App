import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTheme, withStyles } from '@material-ui/core/styles';
import "../CSS/home.css";

function Home(props) {
  const { theme } = props;
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  const styles = {
    primaryText: {
	  backgroundColor: theme.palette.background.default,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: primaryText,
    },
    primaryColor: {
      backgroundColor: primaryColor,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: theme.palette.common.white,
    },
  };

  return (
    <div>
      <img src="https://freerangestock.com/sample/113691/geometric-background-.jpg"/>
    </div>
  );
}

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(Home);