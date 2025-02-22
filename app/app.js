import express from "express";
import cors from "cors";
import userRouter from "../routes/user.routes.js";
import bookRouter from "../routes/book.routes.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/book", bookRouter);

app.get("/", (req, res) => res.send("🌐 Server is Running..."));

export default app;