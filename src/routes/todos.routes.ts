import { Router } from "express";

import { TodoController } from "../useCase/createTodo/TodoController";
import { DeleteTodoController } from "../useCase/deleteTodo/DeleteTodoController";
import { ListTodosController } from "../useCase/listTodos/ListTodosController";
import { UpdateTodoController } from "../useCase/updateTodo/UpdateTodoController";

const todosRoutes = Router();

const todoCreateController = new TodoController();
const listTodoController = new ListTodosController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController();

todosRoutes.post("/", todoCreateController.handle);

todosRoutes.get("/", listTodoController.handle);

todosRoutes.post("/update/:id", updateTodoController.handle);

todosRoutes.delete("/delete/:id", deleteTodoController.handle);

export { todosRoutes };
