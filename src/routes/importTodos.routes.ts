import { Router } from "express";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});

const uploadRouter = Router();

uploadRouter.post("/", upload.single("file"), (request, response) => {
  const { file } = request;

  console.log(file);

  return response.send();
});

export { uploadRouter };
