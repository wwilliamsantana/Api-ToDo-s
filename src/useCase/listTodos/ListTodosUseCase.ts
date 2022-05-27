import { Todos } from "../../entities/Todos";
import { TodosRepository } from "../../repositories/implementation/TodosRepository";

class ListTodosUseCase {
  constructor(private todoRepository: TodosRepository) { }

  execute(): Todos[] {
    const all = this.todoRepository.list();

    return all;
  }
}

export { ListTodosUseCase };
