import express from "express";
const app = express();

const PORT = 3000;

// Routing
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
