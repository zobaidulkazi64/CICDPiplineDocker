import http from "http";
import app from "./app";

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const port = process.env.PORT || 9900;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
