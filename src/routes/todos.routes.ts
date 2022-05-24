import { Router } from "express";

const todosRoutes = Router();

todosRoutes.get("/", (request, response) => {
  return response.json({ message: "Hello Word!" });
});

export { todosRoutes };
