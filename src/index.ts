import { Server } from "socket.io";
import { createServer } from "http";
//TODO remove cors
import cors from "cors";
const httpServer = createServer();
const io = new Server(httpServer);
const port = process.env.PORT || 3000;
httpServer.listen(port);

io.on("newHint", () => {
  io.emit("clientNewHint", () => {});
});
