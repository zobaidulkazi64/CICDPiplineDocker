import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.status(200).send("Hello, Zobaidul Kazi");
});

export default app;
