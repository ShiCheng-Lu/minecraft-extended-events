import { Commands } from "mojang-minecraft";
import { World } from "../index.js";
const OVERWORLD = World.getDimension("overworld");
function sayData(eventName) {
    return function (data) {
        Commands.run(`say ${eventName}`, OVERWORLD);
    };
}
World.events.playerAttackedEntity.subscribe(sayData("playerAttackedEntity"));
