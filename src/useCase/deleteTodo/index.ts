import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { DeleteTodoController } from "./DeleteTodoController";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

const todoRepository = null;
const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

export { deleteTodoController };
