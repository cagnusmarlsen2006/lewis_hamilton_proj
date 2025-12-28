const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// TEMP storage (resets on restart)
const messages = [];

// POST message
app.post("/api/message", (req, res) => {
  const { name, message } = req.body;
  messages.push({
    name,
    message,
    createdAt: new Date()
  });
  res.json({ success: true });
});

// GET messages (admin)
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
