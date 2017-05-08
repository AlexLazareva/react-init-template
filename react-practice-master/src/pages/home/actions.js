export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';

export function addTodo(id, name) {
    let error = '';
    if (!name) {
        error = 'Необходимо ввести название';
    }
    return {
        type: ADD_TODO,
        id, name, error
    };
}

export function likeTodo(todo) {
    const liked = !todo.liked;
    return {
        type: LIKE_TODO,
        todo, liked
    };
}
