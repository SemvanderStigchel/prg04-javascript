import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

let pawnWhiteX = 30;
let rookWhiteX = 30;
let knightWhiteX = 93;

export class Game extends Engine {
    constructor() {
        super({ width: 500, height: 500 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const board = new Actor();
        board.graphics.use(Resources.Board.toSprite());
        board.pos = new Vector(250, 250);
        board.vel = new Vector(0, 0);
        this.add(board);

        for (let i = 0; i < 8; i++) {
            const pawnWhite = new Actor();
            pawnWhite.graphics.use(Resources.PawnWhite.toSprite());
            pawnWhite.pos = new Vector(pawnWhiteX, 405);
            pawnWhite.vel = new Vector(0, 0);
            this.add(pawnWhite);
            pawnWhiteX += 63;
        }

        for (let i = 0; i < 2; i++) {
            const rookWhite = new Actor();
            rookWhite.graphics.use(Resources.RookWhite.toSprite());
            rookWhite.pos = new Vector(rookWhiteX, 467);
            rookWhite.vel = new Vector(0, 0);
            this.add(rookWhite);
            rookWhiteX += 441;
        }

        for (let i = 0; i < 2; i++) {
            const knightWhite = new Actor();
            knightWhite.graphics.use(Resources.KnightWhite.toSprite());
            knightWhite.pos = new Vector(knightWhiteX, 467);
            knightWhite.vel = new Vector(0, 0);
            this.add(knightWhite);
            knightWhiteX += 315;
        }
    }
}

new Game();