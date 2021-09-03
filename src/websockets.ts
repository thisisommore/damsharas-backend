import { Server } from "http";
import { Server as SocketServer, Socket } from "socket.io";
import clues from "./data/clues";
import { Player, runningGame, RunningGame } from "./RunningGame";
import { PlayerType } from "./types/Player";

export function registerWebSockets(httpServer: Server) {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: "https://dump-charades.ommore.me",
    },
  });

  io.on("connection", (socket) => {
    socket.on("register", (type: PlayerType) => {
      runningGame.addPlayer(new Player(type, socket));
      if (type == "helper") {
        runningGame.generateKeyword();
        socket.emit("keywordGenerated", runningGame.keyword);
        socket.emit("hintsGenerated", clues);
      }
    });
    socket.on("addHints", (hints: string[]) => {
      runningGame.addHints(hints);
    });
  });
}
