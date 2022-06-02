import { inject, injectable } from "tsyringe";

import { Todos } from "../../entities/Todos";
import { TodosRepository } from "../../repositories/implementation/TodosRepository";

@injectable()
class ListTodosUseCase {
  constructor(
    @inject("todoRepository") private todoRepository: TodosRepository
  ) { }

  async execute(): Promise<Todos[]> {
    const all = await this.todoRepository.list();

    return all;
  }
}

export { ListTodosUseCase };
