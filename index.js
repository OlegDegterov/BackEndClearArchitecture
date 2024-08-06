import express from "express";
import { userRouter } from "./users/users.js";
import helmet from "helmet";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Allow resources from the same origin
      connectSrc: ["'self'", "http://localhost:8000"], // Allow connections to your API
      // Add other directives as needed
    },
  })
);

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
