import { Request, Response } from "express";

import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

class UpdateTodoController {
  constructor(private updateTodoUseCase: UpdateTodoUseCase) { }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { author, description } = request.body;

    const updateTodo = this.updateTodoUseCase.execute({
      id,
      author,
      description,
    });

    return response.status(201).json(updateTodo);
  }
}

export { UpdateTodoController };
