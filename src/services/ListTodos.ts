import { TodosRepository } from "../repositories/implementation/TodosRepository";

class ListTodos {
  constructor(private todosRepository: TodosRepository) { }

  execute() {
    const all = this.todosRepository.list();

    return all;
  }
}

export { ListTodos };
