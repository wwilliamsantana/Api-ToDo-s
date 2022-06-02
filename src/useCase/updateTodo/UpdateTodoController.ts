import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

class UpdateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { author, description } = request.body;
    const updateTodoUseCase = container.resolve(UpdateTodoUseCase);

    const updateTodo = await updateTodoUseCase.execute({
      id,
      author,
      description,
    });

    return response.status(201).json(updateTodo);
  }
}

export { UpdateTodoController };
