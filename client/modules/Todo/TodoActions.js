
import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
// Export Actions

export function addTodoRequest(newTodo) {
  return () => {
    return callApi('todos', 'post', newTodo);
  };
}

export function addTodos(todos) {
  return {
    type: ADD_TODOS,
    todos,
  };
}

export function fetchTodos() {
  return dispatch => {
    return callApi('todos').then(res => {
      dispatch(addTodos(res.todos));
    });
  };
}

export function updateTodoRequest(todo) {
  return () => {
    return callApi(`todos/${todo._id}`, 'put', todo);
  };
}

export function deletePostRequest(todo) {
  return () => {
    return callApi(`todos/${todo._id}`, 'delete');
  };
}
