import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
  // res.send("Hello");
  throw new Error("Error!!!");
});

app.use((req, res, next) => {
  console.log("Time ", Date.now());
  next();
});

app.use("/users", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
