import { TodosRepository } from "../../repositories/implementation/TodosRepository";

interface IRequest {
  id: string;
  author?: string;
  description?: string;
}

class UpdateTodoUseCase {
  constructor(private todoRepository: TodosRepository) { }

  execute({ id, author, description }: IRequest) {
    const idExist = this.todoRepository.findById(id);

    if (!idExist) {
      throw new Error("Id not found!");
    }

    idExist.author = author || idExist.author;
    idExist.description = description || idExist.description;
    idExist.update_at = new Date();

    return idExist;
  }
}

export { UpdateTodoUseCase };
