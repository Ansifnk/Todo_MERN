const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers');

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);

router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/:id/done', todoController.markTodoAsDone);
router.patch('/:id/notdone', todoController.markTodoAsNotDone);

module.exports = router;