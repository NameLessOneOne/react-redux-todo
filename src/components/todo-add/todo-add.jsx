import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './todo-add.scss';
import {connect} from "react-redux";
import {addTodo} from "../../actions";

class TodoAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoText: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.props.addTodo((e.target.value).trim());
			this.setState({todoText: ''});
		}
	};

	render() {
		return (
			<form noValidate autoComplete="off" className="todo-add">
				<TextField
					className="todo-add-field"
					id="outlined-name"
					label="add todo"
					value={this.state.todoText}
					name={'todoText'}
					onKeyDown={this.handleKeyPress}
					onChange={this.handleChange}
					margin="normal"
					variant="outlined"
				/>
			</form>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	addTodo: value => dispatch(addTodo(value))
});

export default connect(
	null,
	mapDispatchToProps
)(TodoAdd);

TodoAdd.propTypes = {
	addTodo: PropTypes.func.isRequired,
};