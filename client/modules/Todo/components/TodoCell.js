
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Todo.css';

const TodoCell = ({ todo, onAction }) => {
  return (
    <tr>
      <td className={todo.completed ? styles.completed : ''}>{todo.description}</td>
      <td className={todo.completed ? styles.completed : ''}>{todo.completed ? 'True' : 'False'}</td>
      <td>
        <button
          className={`ml-2 btn btn-sm ${todo.completed ? 'btn-danger' : 'btn-primary'} `}
          onClick={() => {
            onAction(todo);
          }}
        >
          {todo.completed ? 'Delete' : 'Complete'}
        </button>
      </td>
    </tr>
  );
};

TodoCell.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onAction: PropTypes.func,
};

export default TodoCell;
