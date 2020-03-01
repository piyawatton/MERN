
// Import Actions
import { ADD_TODOS } from './TodoActions';

// Initial State
const initialState = { data: [] };

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        data: action.todos,
      };
    default:
      return state;
  }
};
/* Selectors */

// Get all todos
export const getTodos = state => state.todos.data;

export default TodoReducer;
