import { Router } from "express";

import { TodosRepository } from "../repositories/implementation/TodosRepository";

const todosRoutes = Router();

const todoRepository = new TodosRepository();

todosRoutes.post("/", (request, response) => {
  const { author, description } = request.body;

  const authorAlreadyExist = todoRepository.findByAuthor(author);

  if (authorAlreadyExist) {
    throw new Error("Author already exists!");
  }

  todoRepository.create({ author, description });

  return response.status(201).send();
});

todosRoutes.get("/", (request, response) => {
  const all = todoRepository.list();

  return response.status(201).json(all);
});

export { todosRoutes };
