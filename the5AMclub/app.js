import express from "express";

const app = express();
const port = 8080;

function greeting(req, res, next) {
    console.log("Hello World");
    next();
}

app.use(greeting);

app.get("/", (req, res) => {
    // console.log(req.body);
    res.send("the 5AM club");
})

app.listen(port, () => {
    console.log(`The server is runing on http://localhost:${port}`);
})