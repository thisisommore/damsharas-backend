import { Router } from "express";
import { body } from "express-validator";
import { verifyKeyword } from "../controllers/game-controllers";
const gamesRoute = Router();

gamesRoute.post(
  "/verify",
  [body("keyword").isString().isLength({ min: 1 })],
  verifyKeyword
);
export default gamesRoute;
