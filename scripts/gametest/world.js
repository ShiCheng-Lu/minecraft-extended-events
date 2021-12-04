import { Commands, World as MCWorld } from 'mojang-minecraft';
export class World {
    constructor() {
        this.getDimension = MCWorld.getDimension;
        this.getPlayers = MCWorld.getPlayers;
    }
}
World.getDimension = MCWorld.getDimension;
World.getPlayers = MCWorld.getDimension;
export const world = new World;
World.events.blockDestructionStarted.subscribe((data) => {
    Commands.run(`say ${data.player.nameTag}`, World.getDimension("overworld"));
});
