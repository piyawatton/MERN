
import Todo from '../models/todo';

export function getTodos(req, res) {
  Todo.find()
    .sort('-dateAdded')
    .exec((err, todos) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ todos });
    });
}

export function addTodo(req, res) {
  const todo = new Todo(req.body);

  todo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo: saved });
  });
}

export function updateTodo(req, res) {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    todo
      .update({
        description: req.body.description,
        completed: req.body.completed,
        dateAdded: todo.dateAdded,
      })
      .then(() => {
        res.status(200).json('Todo updated!');
      })
      .catch(_err => {
        res.status(500).send(_err);
      });
  });
}

export function deleteTodo(req, res) {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    todo.remove(() => {
      res.status(200).json('Todo Delete!');
    });
  });
}
