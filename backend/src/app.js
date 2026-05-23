import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";  // ✅ Import dotenv
dotenv.config();  // ✅ Load .env variables

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    if (!process.env.MONGO_URI) {
        console.error("Missing MONGO_URI in backend/.env");
        process.exit(1);
    }

    const connectionDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MONGO Connected | DB Host: ${connectionDb.connection.host}`);
    
    server.listen(app.get("port"), () => {
        console.log(`🚀 Server running on port ${app.get("port")}`);
    });
};

start();
