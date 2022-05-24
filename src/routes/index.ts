import { Router } from "express";

import { uploadRouter } from "./importTodos.routes";
import { todosRoutes } from "./todos.routes";

const router = Router();

router.use("/todos", todosRoutes);
router.use("/upload", uploadRouter);

export { router };
