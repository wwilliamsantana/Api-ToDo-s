import { Request, Response } from "express";

import { TodoUseCase } from "./TodoUseCase";

class TodoController {
  constructor(private todoUseCase: TodoUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { author, description } = request.body;

    await this.todoUseCase.execute({ author, description });

    return response.status(201).send();
  }
}

export { TodoController };
