import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import uuid from "uuid";

import Todo from "./components/Todo";
import AddTodos from "./components/AddTodos";

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
		//console.log(todo);
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
		return (
			<div className="App">
				<React.Fragment>
					<CssBaseline>
						<Todo
							todos={this.state.todos}
							onDelete={this.handleDeleteProject.bind(this)}
						/>
						<AddTodos addTodo={this.handleAddTodo.bind(this)} />
					</CssBaseline>
				</React.Fragment>
			</div>
		);
	}
}

export default App;
