import express from "express";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log("all");
  next();
});

const cb = (req, res, next) => {
  console.log("cb");
  next();
};
// you can use regExp in routes "/hello"
// for example /.*a$/
app.get("/hello", cb, (req, res) => {
  res.send("Hello");
});
// you can use array cb1, cb2, cb3, for example
// app.get("/hello", [cb1, cb2, cb3, (req, res) => {
//   res.send("Hello");
// }]);

// you can use for route: user/hello if you want
// do crud operations  for user
// app.route("/user")
//   .get("/hello", (req, res) => {
//     res.send("Hello");
//   })
//   .post("/hello", (req, res) => {
//     res.send("Hello");
//   });

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
