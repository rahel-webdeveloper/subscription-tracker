import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcom tracker API");
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

export default app;
