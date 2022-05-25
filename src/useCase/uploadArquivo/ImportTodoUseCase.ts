import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { TodosRepository } from "../../repositories/implementation/TodosRepository";

interface IImportTodo {
  author: string;
  description: string;
}

// Essa função, ler o arquivo enviado no insomnia, fazendo a destruturação dos elementos.
// Após pergamos os elementos, fazemos o create com as informações.
// Podemos fazer diversas aplicações pegando os elementos de arquivos externos.
// -------------------------------------------------
// Vou tirar essa função da nossa aplicação, mas deixarei registrado no git!

class ImportTodoUseCase {
  constructor(private todoRepository: TodosRepository) { }

  loadTodos(file: Express.Multer.File): Promise<IImportTodo[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      const importTodos: IImportTodo[] = [];

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [author, description] = line;

          importTodos.push({
            author,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(importTodos);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const todos = await this.loadTodos(file);

    todos.map(async (todo) => {
      const { author, description } = todo;

      const authorAlreadyExist = this.todoRepository.findByAuthor(author);

      if (!authorAlreadyExist) {
        this.todoRepository.create({ author, description });
      }
    });
  }
}

export { ImportTodoUseCase };
