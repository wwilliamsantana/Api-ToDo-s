import { getRepository, Repository } from "typeorm";

import { Todos } from "../../entities/Todos";
import { ITodosRepositoryDTO, ITodoRepository } from "../ITodosRepository";

class TodosRepository implements ITodoRepository {
  private repository: Repository<Todos>;

  constructor() {
    this.repository = getRepository(Todos);
  }

  async create({ author, description }: ITodosRepositoryDTO): Promise<void> {
    const todos = this.repository.create({
      author,
      description,
    });

    await this.repository.save(todos);
  }

  async update({
    id,
    author,
    description,
  }: ITodosRepositoryDTO): Promise<Todos> {
    const idTodo = await this.repository.findOne(id);

    idTodo.author = author || idTodo.author;
    idTodo.description = description || idTodo.description;

    await this.repository.save(idTodo);

    return idTodo;
  }

  async list(): Promise<Todos[]> {
    const all = await this.repository.find();

    return all;
  }

  async delete(data: Todos): Promise<void> {
    await this.repository.delete(data.id);
  }

  async findByAuthor(author: string): Promise<Todos> {
    const authorExist = await this.repository.findOne({ author });

    return authorExist;
  }

  async findById(id: string): Promise<Todos> {
    const idExist = await this.repository.findOne({ id });

    return idExist;
  }
}

export { TodosRepository };
