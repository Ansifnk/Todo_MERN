const Todo = require("../schemas/todSchema");

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = new Todo({ title });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, done } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, done },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTodoDone = async (req, res) => {
  try {
    const { id } = req.params;
    const { done } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { done }, { new: true });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getTodos = async (req, res) => {
  const { filter } = req.params;
  try {
    const todos = await Todo.find({
      ...(filter != "All" && { done: filter == "Completed" ? true : false }),
    });
    console.log(todos,filter)
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
