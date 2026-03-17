const express = require("express");
const requireAuth = require("../middleware");
const router = express.Router();

const ttApiUrl = process.env.TICK_TICK_API_URL;

router.get("/project", requireAuth, async (req, res) => {
  try {
    const response = await fetch(`${ttApiUrl}/project`, {
      headers: {
        Authorization: `Bearer ${req.session.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to fetch projects",
      details: err.message,
    });
  }
});

module.exports = router;
