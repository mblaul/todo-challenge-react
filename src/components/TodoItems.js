import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	}
});

class TodoItems extends Component {
	deleteProject(id) {
		this.props.onDelete(id);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="TodoItems">
				<ListItem>
					<ListItemText>
						{this.props.todo.title}
						<Button
							variant="fab"
							enabled
							mini
							aria-label="delete"
							onClick={this.deleteProject.bind(this, this.props.todo.id)}
							className={classes.button}
						>
							<DeleteIcon />
						</Button>
					</ListItemText>
				</ListItem>
				<Divider />
			</div>
		);
	}
}

export default withStyles(styles)(TodoItems);
