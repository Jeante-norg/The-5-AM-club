import express from "express";

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   //   console.log(req.rawHeaders);
//   //   res.send("<h1>The 5 AM CLUB.</h1>");
//   //   res.send("The Dead poets Society.");
//   res.send("The 5 AM Club.");
// });

app.get("/", (req, res) => {
  res.send("The Dead Poets Society.");
});

app.get("/about", (req, res) => {
  res.send("I'm part of The 5 AM Club.");
});

app.get("/phone", (req, res) => {
  res.send("<h1>9980318997</h1>");
});

app.get("/paul", (req, res) => {
  res.send("Paul is sitting beside me.");
});

app.listen(port, () => {
  console.log("The server is running at port 3001.");
});
