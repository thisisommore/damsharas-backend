import { createServer } from "http";
import { registerWebSockets } from "./websockets";
import express from "express";
import gamesRoute from "./routes/game-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/game", gamesRoute);
const httpServer = createServer(app);

registerWebSockets(httpServer);
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`Server listing on ${port}`);
});
