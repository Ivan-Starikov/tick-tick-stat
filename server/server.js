require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const session = require("express-session");

const port = process.env.PORT || 8080;
const scope = process.env.SCOPE;
const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
const clientSecret = process.env.CLIENT_SECRET;

const corsoptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsoptions));

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/ttAuth", (req, res) => {
  const state = crypto.randomBytes(16).toString("hex");

  req.session.oauthState = state;

  res.redirect(
    `https://ticktick.com/oauth/authorize?scope=${scope}&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&response_type=code`,
  );
});

app.get("/ttAuthCallback", async (req, res) => {
  const { code, state } = req.query;

  if (state !== req.session.oauthState) {
    return res.status(403).send("Invalid state parameter");
  }

  const tokenUrl = "https://ticktick.com/oauth/token";
  const grantType = "authorization_code";

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );

  const body = new URLSearchParams();

  body.append("grant_type", grantType);
  body.append("code", code);
  body.append("redirectUri", redirectUri);
  body.append("scope", scope);

  try {
    const tokenRes = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      return res.status(500).json(tokenData);
    }

    res.json(tokenData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Token exchange failed");
  }
});

app.listen(port, () => {
  console.log("server started on port 8080");
});
