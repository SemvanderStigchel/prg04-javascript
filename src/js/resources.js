import { ImageSource, Sound, Resource, Loader } from "excalibur";
import boardImage from "../images/chess-board.png";
import pawnImage from "../images/chess-pion-wit.png";
import rookImage from "../images/chess-toren-wit.png";
import knightImage from "../images/chess-paard-wit.png";

const Resources = {
    Board: new ImageSource(boardImage),
    PawnWhite: new ImageSource(pawnImage),
    RookWhite: new ImageSource(rookImage),
    KnightWhite: new ImageSource(knightImage),
};
const ResourceLoader = new Loader([
    Resources.Board,
    Resources.PawnWhite,
    Resources.RookWhite,
    Resources.KnightWhite,
]);

export { Resources, ResourceLoader };
