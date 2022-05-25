import { TodosRepository } from "../../repositories/implementation/TodosRepository";

class DeleteTodoUseCase {
  constructor(private todoRepository: TodosRepository) { }

  execute(id: string) {
    const element = this.todoRepository.findById(id);

    if (!element) {
      throw new Error("Id not found");
    }

    this.todoRepository.delete(element.id);
  }
}

export { DeleteTodoUseCase };
