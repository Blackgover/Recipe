import express from "express";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.config";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/recipe')

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}