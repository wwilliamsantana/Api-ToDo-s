import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { ImportTodoController } from "./ImportTodoController";
import { ImportTodoUseCase } from "./ImportTodoUseCase";

const todoRepository = TodosRepository.getInstance();
const importTodoUseCase = new ImportTodoUseCase(todoRepository);
const importTodoController = new ImportTodoController(importTodoUseCase);

export { importTodoController };
