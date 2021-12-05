import { BlockLocation, Commands } from "mojang-minecraft";
import { World } from "../minecraft-extended-events";
const location = new BlockLocation(0, -60, 0);
const overworld = World.getDimension("overworld");
World.events.entityUseItem.subscribe((data) => {
    const entities = overworld.getEntitiesAtBlockLocation(location);
    entities.forEach((entity) => {
        Commands.run(`say ${entity.id}`, overworld);
    });
});
