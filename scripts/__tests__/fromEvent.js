import { Commands } from "mojang-minecraft";
import { World } from "../modules/minecraft-extended-events/index.js";
const OVERWORLD = World.getDimension("overworld");
let last_time = 0;
let ticks = 0;
const date = new Date();
World.events.tick.subscribe((data) => {
    const time = new Date().getSeconds();
    ticks++;
    if (time !== last_time) {
        Commands.run(`title @a actionbar ${ticks}`, World.getDimension("overworld"));
        last_time = time;
        ticks = 0;
    }
});
