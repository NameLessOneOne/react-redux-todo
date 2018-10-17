const initialState = [
	{id: Math.random(), value: "alalalla", completed: false},
	{id: Math.random(), value: "wasya is igor", completed: false},
	{id: Math.random(), value: "wtf lalka", completed: false}
];

const todos = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: Math.random(),
					value: action.value,
					completed: false
				}
			];
		case 'DELETE_TODO':
			const stateCopy = [...state];
			stateCopy.splice(action.itemIndex, 1);
			return stateCopy;
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			);
		default:
			return state
	}
};

export default todos