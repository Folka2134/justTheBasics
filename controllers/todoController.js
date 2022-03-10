// Bring in Todo Model
const TodosModel = require('../models/TodosModel')
const Todo = require('../models/TodosModel')

// @desc  GET all todos
// @route GET /api/v1/todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await TodosModel.find()
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
exports.addTodo = (req, res, next) => {
  res.send('POST todo')
}

// @desc Delete todo
// @route DELETE /api/v1/todos/:id
exports.deleteTodo = (req, res, next) => {
  res.send('DELETE todo')
}