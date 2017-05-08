import { ADD_TODO } from './actions';
export { HomeReducer } from './reducers';

const initialState = {
    todos: [
        {
            id: '1',
            name: 'Todo 1'
        }
    ],
    error: ''
};
function homeReducer(state = initialState, action) {
   switch (action.type) {
       case ADD_TODO:
           return state;
       default:
           return state;
   }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
