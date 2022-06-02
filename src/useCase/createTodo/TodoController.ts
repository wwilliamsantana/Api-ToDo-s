import { Request, Response } from "express";
import { container } from "tsyringe";

import { TodoUseCase } from "./TodoUseCase";

class TodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { author, description } = request.body;

    const todoUseCase = container.resolve(TodoUseCase);

    await todoUseCase.execute({ author, description });

    return response.status(201).send();
  }
}

export { TodoController };
