import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { ListTodosController } from "./ListTodosController";
import { ListTodosUseCase } from "./ListTodosUseCase";

const todoRepository = new TodosRepository();
const listTodosUseCase = new ListTodosUseCase(todoRepository);
const listTodosController = new ListTodosController(listTodosUseCase);

export { listTodosController };
