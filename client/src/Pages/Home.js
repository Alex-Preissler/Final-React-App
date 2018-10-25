import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';

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
    <div style={{ width: 300 }}>
      <Typography style={styles.primaryColor}>{`Primary color ${primaryColor}`}</Typography>
      <Typography style={styles.primaryText}>{`Primary text ${primaryText}`}</Typography>
    </div>
  );
}

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(Home);