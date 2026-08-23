import "dotenv/config";

import express from "express";

const app = express();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello from Server",
    });
});

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Server is running on port 3000");
});
