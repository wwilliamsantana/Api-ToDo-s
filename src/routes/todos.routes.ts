import { Router } from "express";

import { todoController } from "../useCase/createTodo";
import { deleteTodoController } from "../useCase/deleteTodo";
import { listTodosController } from "../useCase/listTodos";
import { updateTodoController } from "../useCase/updateTodo";

const todosRoutes = Router();

todosRoutes.post("/", (request, response) => {
  return todoController.handle(request, response);
});

todosRoutes.get("/", (request, response) => {
  console.log("Hello Word");
  return listTodosController.handle(request, response);
});

todosRoutes.post("/update/:id", (request, response) => {
  return updateTodoController.handle(request, response);
});

todosRoutes.delete("/delete/:id", (request, response) => {
  return deleteTodoController.handle(request, response);
});

export { todosRoutes };
