import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from "./todo-list-item";
import List from '@material-ui/core/List';
import './todo-list.scss';
import {connect} from "react-redux";
import {deleteTodo} from "../../actions";

class TodoList extends Component {
	render() {
		const items = this.props.todos.map((item, index) => {
			return (
				<TodoListItem
					key={item.id}
					item={item}
					index={index}
					removeItem={this.props.deleteTodo}
				/>
			);
		});

		return (
			<List component="nav">
				{items}
			</List>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	deleteTodo: itemId => dispatch(deleteTodo(itemId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
