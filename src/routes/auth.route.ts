import { createNewUser } from "@/controller";
import { Router } from "express";

export const authRouter = Router();

authRouter.post("/sign-up", createNewUser);
