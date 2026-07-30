import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});