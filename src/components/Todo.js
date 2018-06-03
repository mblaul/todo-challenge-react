import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import TodoItems from "./TodoItems";

const styles = theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
});

class Todo extends Component {
	deleteProject(id) {
		this.props.onDelete(id);
	}

	render() {
		const { classes } = this.props;
		let todoItems;

		if (this.props.todos) {
			todoItems = this.props.todos.map(todo => {
				return (
					<TodoItems
						onDelete={this.deleteProject.bind(this)}
						key={todo.id}
						todo={todo}
					/>
				);
			});
		}
		return (
			<div className={classes.root}>
				<List component="nav">{todoItems}</List>
			</div>
		);
	}
}

Todo.propTypes = {
	classes: PropTypes.object.isRequired,
	todos: PropTypes.array,
	onDelete: PropTypes.func
};

export default withStyles(styles)(Todo);
