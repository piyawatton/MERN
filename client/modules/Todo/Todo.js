
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodoRequest, fetchTodos, updateTodoRequest, deletePostRequest } from './TodoActions';
import { getTodos } from './TodoReducer';
import TodoCell from './components/TodoCell';

const Todo = ({ dispatch, todos }) => {
    const [description, setDescription] = React.useState('');

    // React.useEffect(() => {
    //     dispatch(fetchTodos());
    // }, [description]);

    const onChangeDescription = e => {
        setDescription(e.target.value);
    };

    const deleteTodo = todo => {
        if (todo.completed) {
            if (confirm('Do you want to delete this todo')) {
                dispatch(deletePostRequest(todo));
                dispatch(fetchTodos());
            }
        } else {
            const updateTodo = {
                completed: true,
                description: todo.description,
                _id: todo._id,
            };
            dispatch(updateTodoRequest(updateTodo));
            dispatch(fetchTodos());
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        const des = description;
        const newTodo = {
            completed: false,
            description: des,
        };

        dispatch(addTodoRequest(newTodo));
        setDescription('');
        dispatch(fetchTodos());
    };
    return (
        <div>
            <div>
                <h3>Todos List</h3>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-10">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={onChangeDescription}
                                placeholder="Description"
                            />
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary">
                                Add Todo
              </button>
                        </div>
                    </div>
                </form>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Complete</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.map((todo, index) => (
                            <TodoCell todo={todo} key={index} onAction={deleteTodo} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Actions required to provide data for this component to render in sever side.
Todo.need = [
    () => {
        return fetchTodos();
    },
];

const mapStateToProps = state => {
    return {
        todos: getTodos(state),
    };
};

Todo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            description: PropTypes.string,
            completed: PropTypes.bool,
        })
    ),
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Todo);
