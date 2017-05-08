import { ADD_TODO, LIKE_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Todo 1',
            liked: false
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let todos = state.todos;
            if (!action.error) {
                todos.push({id: action.id, name: action.name, liked: false});
            }
            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = true;
            return Object.assign({}, state, {todos: state.todos});
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
