import express from "express"
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5001,()=>{
    console.log("server is running on port 5001");
    connectDB()
})