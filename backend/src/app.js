import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);