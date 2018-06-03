import React, { Component } from "react";
import uuid from "uuid";

import Todo from "./components/Todo";
import AddTodos from "./components/AddTodos";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	getTodos() {
		this.setState({
			todos: [
				{
					id: uuid.v4(),
					title: "Business Website"
				},
				{
					id: uuid.v4(),
					title: "Social App"
				}
			]
		});
	}

	componentWillMount() {
		this.getTodos();
	}

	componentDidMount() {
		this.getTodos();
	}

	handleAddTodo(todo) {
		let todos = this.state.todos;
		this.setState({ todos: [...todos, todo] });
	}

	handleDeleteProject(id) {
		let todos = this.state.todos;
		let index = todos.findIndex(x => x.id === id);
		todos.splice(index, 1);
		this.setState({ todos: todos });
	}

	render() {
		const { classes } = this.props;

		return (
			<div className="App">
				<React.Fragment>
					<CssBaseline>
						<Card className={classes.card}>
							<Grid container spacing={24}>
								<Grid item xs={12}>
									<CardContent>
										<Todo
											todos={this.state.todos}
											onDelete={this.handleDeleteProject.bind(this)}
										/>
									</CardContent>
								</Grid>
								<Grid item xs={12}>
									<CardActions>
										<AddTodos addTodo={this.handleAddTodo.bind(this)} />
									</CardActions>
								</Grid>
							</Grid>
						</Card>
					</CssBaseline>
				</React.Fragment>
			</div>
		);
	}
}

export default withStyles(styles)(App);
