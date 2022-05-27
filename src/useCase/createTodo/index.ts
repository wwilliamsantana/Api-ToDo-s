import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { TodoController } from "./TodoController";
import { TodoUseCase } from "./TodoUseCase";

export default (): TodoController => {
  const todoRepository = new TodosRepository();
  const todoUseCase = new TodoUseCase(todoRepository);
  const todoController = new TodoController(todoUseCase);

  return todoController;
};
