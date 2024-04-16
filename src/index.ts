import app from "./app";
import router from "./routes";

// router
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello!, I am live on!, on port 4003");
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// 500 handler
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// 400 handler
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(400).json({ message: "Bad Request" });
});

const port = process.env.PORT || 4000;
const serviceName = process.env.SERVICE_NAME || "cicd-service";

app.listen(port, () => {
  console.log(`${serviceName} started on port ${port}`);
});
