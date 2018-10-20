import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const UserNav = ({ onClick }) => {


	return (

		<div>
			<List component="nav">
				<ListItem
					button
					onClick={() => onClick(0)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => onClick(1)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Cleaning Lists" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => onClick(2)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Meal Plans" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => onClick(3)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Shopping Lists" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => onClick(4)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Workouts" />
				</ListItem>
				<Divider />
				<ListItem
					button
					onClick={() => onClick(5)}
				>
					<ListItemIcon>

					</ListItemIcon>
					<ListItemText primary="Calendar" />
				</ListItem>
			</List>

		</div>
	);
}

export default UserNav;