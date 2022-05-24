import { Request, Response } from "express";

import { ListTodosUseCase } from "./ListTodosUseCase";

class ListTodosController {
  constructor(private listTodosUseCase: ListTodosUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listTodosUseCase.execute();

    return response.status(201).json(all);
  }
}

export { ListTodosController };
