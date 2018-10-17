import React, { Component } from 'react';
import './main.scss';
import Button from '@material-ui/core/Button';
import TodoAdd from "../todo-add/todo-add";
import TodoList from "../todo-list/todo-list";

const todoList = [
	{index: Math.random(), value: "wasya is igor"},
	{index: Math.random(), value: "wtf lalka"},
	{index: Math.random(), value: "alalalla"}
];

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {todoList: todoList};
	}

	removeItem = (itemIndex) => {
		todoList.splice(itemIndex, 1);
		this.setState({todoList: todoList});
	};

	newTodo = (itemText) => {
		todoList.push({index: Math.random(), value: itemText});
		this.setState({todoList: todoList});
	};

  render() {
    return (
      <div className="App">
        {/*<header className="todo-header">Todo list</header>*/}

	      <div className="list-group">
		      <TodoAdd/>
		      <TodoList/>
		      {/*<TodoAdd newTodo={this.newTodo}/>*/}
		      {/*<TodoList items={todoList} removeItem={this.removeItem}/>*/}
	      </div>

	      {/*<Button variant="contained" color="primary">*/}
		      {/*Hello World*/}
	      {/*</Button>*/}
      </div>
    );
  }
}

export default Main;
