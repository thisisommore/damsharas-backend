import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { runningGame } from "../RunningGame";

type Body = {
  keyword: string;
};
export const verifyKeyword: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(442).send("Please check input fields and try again");
    return;
    //   TODO:HAndle error
  }
  const body = req.body as Body;
  if (runningGame.keyword == body.keyword) res.send("Answer is valid");
  else res.send("Answer is not valid");
};
