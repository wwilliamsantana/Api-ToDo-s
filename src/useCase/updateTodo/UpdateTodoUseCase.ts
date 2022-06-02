import { inject, injectable } from "tsyringe";

import { Todos } from "../../entities/Todos";
import { TodosRepository } from "../../repositories/implementation/TodosRepository";

interface IRequest {
  id: string;
  author?: string;
  description?: string;
}

@injectable()
class UpdateTodoUseCase {
  constructor(
    @inject("todoRepository") private todoRepository: TodosRepository
  ) { }

  async execute({ id, author, description }: IRequest): Promise<Todos> {
    const idExist = await this.todoRepository.findById(id);

    if (!idExist) {
      throw new Error("Id not found!");
    }

    const updateId = await this.todoRepository.update({
      id,
      author,
      description,
    });

    return updateId;
  }
}

export { UpdateTodoUseCase };
