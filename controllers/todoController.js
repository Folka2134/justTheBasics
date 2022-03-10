// Bring in Todo Model

const Todos = require('../models/Todos')

// @desc  GET all todos
// @route GET /api/v1/todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todos.find()
    return res.status(200).json({
      success: true,
      data: todos
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc Add todo
// @route POST /api/v1/todos
exports.addTodo = async (req, res, next) => {
  try {
    const { text } = req.body
    const todo = await Todos.create(req.body)
    return res.status(201).json({
      success: true,
      data: todo
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message)
      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// @desc Delete todo
// @route DELETE /api/v1/todos/:id
exports.deleteTodo = (req, res, next) => {
  res.send('DELETE todo')
}