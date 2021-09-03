import { Socket } from "socket.io";
import keywords from "./data/keywords";
import { PlayerType } from "./types/Player";

export class RunningGame {
  keyword: string;
  constructor(private players: Player[] = []) {}
  addPlayer(player: Player) {
    this.players.push(player);
  }

  addHints(hints: string[]) {
    this.players
      .find(({ type }) => type == "finder")
      ?.socket.emit("hintsAdded", hints);
  }

  generateKeyword() {
    this.keyword = keywords[Math.floor(Math.random() * keywords.length)];
  }
}

export class Player {
  constructor(public type: PlayerType, public socket: Socket) {}
}

export const runningGame = new RunningGame();
