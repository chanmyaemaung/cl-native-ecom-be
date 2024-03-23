import { authRouter } from "@/routes";
import "dotenv/config";
import express from "express";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
