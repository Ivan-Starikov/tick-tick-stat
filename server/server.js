require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");

const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: "lax" },
  }),
);

// Routes
app.use("/", authRoutes);
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log("server started on port 8080");
});
