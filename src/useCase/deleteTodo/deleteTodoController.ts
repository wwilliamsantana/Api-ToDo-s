import { Request, Response } from "express";

import { DeleteTodoUseCase } from "./deleteTodoUseCase";

class DeleteTodoController {
  constructor(private deleteTodoUseCase: DeleteTodoUseCase) { }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteTodoUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteTodoController };
