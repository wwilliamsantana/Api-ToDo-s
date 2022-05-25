import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { DeleteTodoController } from "./deleteTodoController";
import { DeleteTodoUseCase } from "./deleteTodoUseCase";

const todoRepository = TodosRepository.getInstance();
const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

export { deleteTodoController };
