import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
		backgroundColor: theme.palette.background.paper
	},
	button: {
		margin: theme.spacing.unit
	},
	menu: {
		width: 200,
		backgroundColor: theme.palette.background.paper
	}
});

class AddTodos extends Component {
	constructor() {
		super();
		this.state = {
			newTodo: {},
			todoText: ""
		};
	}

	handleChange = todoText => event => {
		this.setState({
			[todoText]: event.target.value
		});
	};

	handleSubmit(e) {
		if (this.state.todoText === "") {
			alert("Title is required!");
		} else {
			this.setState(
				{
					newTodo: {
						id: uuid.v4(),
						title: this.state.todoText
					}
				},
				function() {
					this.props.addTodo(this.state.newTodo);
				},
				(this.state.todoText = "")
			);
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<TextField
					id="todoText"
					label="Todo"
					className={classes.textField}
					value={this.state.todoText}
					onChange={this.handleChange("todoText")}
					margin="normal"
				/>

				<Button
					variant="fab"
					mini
					color="primary"
					aria-label="add"
					className={classes.button}
					onClick={() => this.handleSubmit()}
				>
					<AddIcon />
				</Button>
			</div>
		);
	}
}

AddTodos.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTodos);
