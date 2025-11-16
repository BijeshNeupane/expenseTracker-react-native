import express from "express";
import { config } from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionRoute from "./routes/transaction.route.js";

config();

const app = express();

// middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/transactions", transactionRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
