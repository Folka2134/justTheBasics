const express = require('express')

// Initialize router with express.Router
const router = express.Router()

// Bring in controller functions
const { getTodos, addTodo, deleteTodo } = require('../controllers/todoController')

// Assign server request to functions
router.route('/')
  .get(getTodos)
  .post(addTodo)

router.route('/:id')
  .delete(deleteTodo)

module.exports = router