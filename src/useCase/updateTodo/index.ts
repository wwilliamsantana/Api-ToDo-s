import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { UpdateTodoController } from "./UpdateTodoController";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

const todoRepository = TodosRepository.getInstance();
const updateTodoUseCase = new UpdateTodoUseCase(todoRepository);
const updateTodoController = new UpdateTodoController(updateTodoUseCase);

export { updateTodoController };
