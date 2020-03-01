import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = new Router();

// Get all Todos
router.route('/todos').get(TodoController.getTodos);

// Add a new Todo
router.route('/todos').post(TodoController.addTodo);

// Update Todo
router.route('/todos/:id').put(TodoController.updateTodo);

// // Delete Todo
router.route('/todos/:id').delete(TodoController.deleteTodo);

export default router;