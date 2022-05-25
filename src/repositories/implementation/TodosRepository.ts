import { Todos } from "../../Model/Todos";
import { ITodosRepositoryDTO, ITodoRepository } from "../ITodosRepository";

class TodosRepository implements ITodoRepository {
  private todos: Todos[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: TodosRepository;

  private constructor() {
    this.todos = [];
  }

  public static getInstance(): TodosRepository {
    if (!TodosRepository.INSTANCE) {
      TodosRepository.INSTANCE = new TodosRepository();
    }

    return TodosRepository.INSTANCE;
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

  findById(id: string): Todos {
    const idExist = this.todos.find((element) => element.id === id);

    return idExist;
  }

  delete(id: string): void {
    const element = this.todos.findIndex((value) => value.id === id);

    this.todos.splice(element, 1);
  }
}

export { TodosRepository };
