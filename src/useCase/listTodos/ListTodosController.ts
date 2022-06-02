import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTodosUseCase } from "./ListTodosUseCase";

class ListTodosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTodosUseCase = container.resolve(ListTodosUseCase);

    const all = await listTodosUseCase.execute();

    return response.status(201).json(all);
  }
}

export { ListTodosController };
