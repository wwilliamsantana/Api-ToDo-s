import express from "express";

import { todosRoutes } from "./routes/todos.routes";

const app = express();

app.use(express.json());

app.use("/todos", todosRoutes);

app.listen(3333, () => {
  console.log("Server is running!");
});
