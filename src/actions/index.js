export const addTodo = value => ({
	type: 'ADD_TODO',
	value
});

export const deleteTodo = itemIndex => ({
	type: 'DELETE_TODO',
	itemIndex
});

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};