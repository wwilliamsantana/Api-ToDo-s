import { Router } from "express";

import { TodosRepository } from "../repositories/implementation/TodosRepository";
import { CreateTodosRepository } from "../services/CreateTodosRepository";
import { ListTodos } from "../services/ListTodos";

const todosRoutes = Router();

const todoRepository = new TodosRepository();

todosRoutes.post("/", (request, response) => {
  const { author, description } = request.body;

  const createTodosRepository = new CreateTodosRepository(todoRepository);

  createTodosRepository.execute({ author, description });

  return response.status(201).send();
});

todosRoutes.get("/", (request, response) => {
  const listTodos = new ListTodos(todoRepository);

  const all = listTodos.execute();

  return response.status(201).json(all);
});

export { todosRoutes };
