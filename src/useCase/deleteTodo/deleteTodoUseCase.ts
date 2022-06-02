import { inject, injectable } from "tsyringe";

import { Todos } from "../../entities/Todos";
import { TodosRepository } from "../../repositories/implementation/TodosRepository";

@injectable()
class DeleteTodoUseCase {
  constructor(
    @inject("todoRepository") private todoRepository: TodosRepository
  ) { }

  async execute(id: string): Promise<void> {
    const idAlreadyExist = await this.todoRepository.findById(id);

    if (!idAlreadyExist) {
      throw new Error("Id not found");
    }

    await this.todoRepository.delete(idAlreadyExist);
  }
}

export { DeleteTodoUseCase };
