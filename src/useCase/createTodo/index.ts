import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { TodoController } from "./TodoController";
import { TodoUseCase } from "./TodoUseCase";

const todoRepository = TodosRepository.getInstance();
const todoUseCase = new TodoUseCase(todoRepository);
const todoController = new TodoController(todoUseCase);

export { todoController };
