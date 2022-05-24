import { TodosRepository } from "../repositories/implementation/TodosRepository";

interface IRequest {
  author: string;
  description: string;
}

class CreateTodosRepository {
  constructor(private todoRepository: TodosRepository) { }

  execute({ author, description }: IRequest) {
    const authorAlreadyExist = this.todoRepository.findByAuthor(author);

    if (authorAlreadyExist) {
      throw new Error("Author already exists!");
    }

    this.todoRepository.create({ author, description });
  }
}

export { CreateTodosRepository };
