import { Router } from "express";
import {
  cancelSubscription,
  createSubscription,
  deleteSubscription,
  getAllSubscriptions,
  getSubscriptionDetails,
  getUpdateSubscription,
  getUserSubscriptions,
} from "../controller/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getAllSubscriptions);

subscriptionRouter.get("/:id", getSubscriptionDetails);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/", authorize, getUpdateSubscription);

subscriptionRouter.delete("/", authorize, deleteSubscription);

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription);

export default subscriptionRouter;
