import { Request, Response } from "express";

import { TodoUseCase } from "./TodoUseCase";

class TodoController {
  constructor(private todoUseCase: TodoUseCase) { }

  handle(request: Request, response: Response): Response {
    const { author, description } = request.body;

    this.todoUseCase.execute({ author, description });

    return response.status(201).send();
  }
}

export { TodoController };
