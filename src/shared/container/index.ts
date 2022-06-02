import { container } from "tsyringe";

import { TodosRepository } from "../../repositories/implementation/TodosRepository";
import { ITodoRepository } from "../../repositories/ITodosRepository";

container.registerSingleton<ITodoRepository>("todoRepository", TodosRepository);
