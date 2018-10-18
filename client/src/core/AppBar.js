import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    align: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class MainAppBar extends React.Component {

  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return(
        <AppBar position="static" className={classes.root}>
        <Grid container fluid>
          <Grid item xs={12} sm={1}>
            <Typography>
              App
            </Typography>

          </Grid>
          <Hidden only={'xs'}>
            <Grid item xs={0} sm={10}>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={1}>
            <Toolbar>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle/>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My Account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
    );
  };
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withWidth: true })(MainAppBar);