var express = require("express");
var router = express.Router();
const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");

let todos = [];
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ todos });
});

const createSchema = Joi.object({
  name: Joi.string().required(),
  state: Joi.string().valid("in_progress", "done"),
});
router.post("/create", function (req, res, next) {
  const body = req.body;
  const validationResult = createSchema.validate(body);
  if (validationResult.error)
    return res.status(400).json({ error: validationResult.error });
  const id = uuidv4();
  const todo = { state: "in_progress", ...body, id };
  todos.push(todo);
  res.json({ todo });
});

const updateSchema = Joi.object({
  id: Joi.string().required(),
  state: Joi.string().valid("in_progress", "done").required(),
});
router.post("/update", function (req, res, next) {
  const body = req.body;
  const validationResult = updateSchema.validate(body);
  if (validationResult.error)
    return res.status(400).json({ error: validationResult.error });
  const todo = todos.find((todo) => todo.id === body.id);
  if (!todo)
    return res
      .status(404)
      .json({ error: `Todo with id: ${body.id} not found.` });
  todos = todos.map((todo) => {
    if (todo.id === body.id) {
      todo.state = body.state;
    }
    return todo;
  });
  res.json({ todo });
});

router.delete("/:id", function (req, res, next) {
  const params = req.params;
  if (!params?.id)
    return res.status(400).json({ error: `You have to pass an id.` });
  const id = params.id;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo)
    return res.status(404).json({ error: `Todo with id: ${id} not found.` });
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ todo });
});

module.exports = router;
