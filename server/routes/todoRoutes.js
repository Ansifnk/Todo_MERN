const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers');

router.post('/', todoController.createTodo);
router.get('/:filter', todoController.getTodos);

router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/:id', todoController.updateTodoDone);

module.exports = router;