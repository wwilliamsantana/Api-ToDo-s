import { Router } from "express";
import multer from "multer";

import { importTodoController } from "../useCase/uploadArquivo";

const upload = multer({
  dest: "./tmp",
});

const uploadRouter = Router();

uploadRouter.post("/", upload.single("file"), (request, response) => {
  return importTodoController.handle(request, response);
});

export { uploadRouter };
