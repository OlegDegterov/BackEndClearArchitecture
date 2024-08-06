import express from "express";

const port = 8000;
const app = express();

app.get("/hello", (req, res) => {
  // res.cookie("token", "token123456", {
  //   domain: "",
  //   path: "/",
  //   secure: true,
  //   expires: 600000,
  // });
  // res.clearCookie("token");
  // res.send("{ a: 1 }");
  // if you no logic in cb function
  // you must to call end() method
  res.end();
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
