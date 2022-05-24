import { Todos } from "../../Model/Todos";
import { ITodosRepositoryDTO, ITodoRepository } from "../ITodosRepository";

class TodosRepository implements ITodoRepository {
  private todos: Todos[];

  constructor() {
    this.todos = [];
  }

  create({ author, description }: ITodosRepositoryDTO) {
    const todos = new Todos();

    Object.assign(todos, {
      author,
      description,
      created_at: new Date(),
    });

    this.todos.push(todos);
  }

  list(): Todos[] {
    return this.todos;
  }

  findByAuthor(author: string) {
    const authorExist = this.todos.find((name) => name.author === author);

    return authorExist;
  }
}

export { TodosRepository };
