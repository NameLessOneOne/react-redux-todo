import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './todo-list-item.scss';
import PropTypes from "prop-types";

class TodoListItem extends Component {
	onRemoveItem = () => {
		const index = parseInt(this.props.index);
		this.props.removeItem(index);
	};

	render() {
		return (
			<ListItem button className="list-group-item">
				<div>{this.props.item.value}</div>
				<ListItemIcon onClick={this.onRemoveItem}>
					<FontAwesomeIcon icon={faTrash} />
				</ListItemIcon>
			</ListItem>
		);
	}
}

export default TodoListItem;

TodoListItem.propTypes = {
	removeItem: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};
