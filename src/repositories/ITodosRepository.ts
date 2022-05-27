import { Todos } from "../entities/Todos";

interface ITodosRepositoryDTO {
  author: string;
  description: string;
}

interface ITodoRepository {
  create({ author, description }: ITodosRepositoryDTO): Promise<void>;
  list(): Promise<Todos[]>;
  findByAuthor(author: string): Promise<Todos>;
  findById(id: string): Promise<Todos>;
  // delete(id: string): Promise<void>;
}

export { ITodoRepository, ITodosRepositoryDTO };
