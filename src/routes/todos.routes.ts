import { Router } from "express";

import { todoController } from "../useCase/createTodos";
import { listTodosController } from "../useCase/listTodos";

const todosRoutes = Router();

todosRoutes.post("/", (request, response) => {
  return todoController.handle(request, response);
});

todosRoutes.get("/", (request, response) => {
  return listTodosController.handle(request, response);
});

export { todosRoutes };
