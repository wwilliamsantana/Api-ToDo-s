import { Request, Response } from "express";

import { ImportTodoUseCase } from "./ImportTodoUseCase";

class ImportTodoController {
  constructor(private uploadTodoUseCase: ImportTodoUseCase) { }

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.uploadTodoUseCase.execute(file);

    return response.send();
  }
}

export { ImportTodoController };
