import { Router } from "express";
import { authValidation } from "../middleware/authMiddleware.js";
import { IncomeExpenses, userResume } from "../controller/Trade.js";
import { tradeSchema } from "../schema/TradeSchema.js";
import { validateSchema } from "../middleware/validateSchema.js";

const tradeRouter = Router();

// Transcations routes

tradeRouter.use(authValidation);
tradeRouter.post("/entry", validateSchema(tradeSchema), IncomeExpenses);
tradeRouter.get("/entry", userResume);

export default tradeRouter;
