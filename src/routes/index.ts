import { Router } from "express";

import { todosRoutes } from "./todos.routes";

const router = Router();

router.use("/todos", todosRoutes);

export { router };
