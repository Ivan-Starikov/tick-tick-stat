const express = require("express");
const app = express();
const cors = require("cors");

const port = 8080;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server started on port 8080");
});
