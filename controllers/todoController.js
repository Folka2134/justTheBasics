// @desc  GET all todos
// @route GET /api/v1/todos
exports.getTodos = (req, res, next) => {
  res.send('GET todos')
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