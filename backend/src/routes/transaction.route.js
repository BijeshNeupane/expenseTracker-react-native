import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getSummaryByUserId,
  getTransactionByUserId,
} from "../controller/transactions.controller.js";

const router = express.Router();

router.get("/:userId", getTransactionByUserId);

router.post("/", addTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserId);

export default router;
