import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { TodosRepository } from "../../repositories/implementation/TodosRepository";

class ImportTodoUseCase {
  constructor(private todoRepository: TodosRepository) { }

  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", (line) => {
      const [author, description] = line;
      this.todoRepository.create({ author, description });
    });

    fs.promises.unlink(file.path);
  }
}

export { ImportTodoUseCase };
