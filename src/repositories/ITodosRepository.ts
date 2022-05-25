import { Todos } from "../Model/Todos";

interface ITodosRepositoryDTO {
  author: string;
  description: string;
}

interface ITodoRepository {
  create({ author, description }: ITodosRepositoryDTO);
  list(): Todos[];
  findByAuthor(author: string): Todos;
  findById(id: string): Todos;
  delete(id: string): void;
}

export { ITodoRepository, ITodosRepositoryDTO };
