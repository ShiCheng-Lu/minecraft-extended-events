import { Commands, World as MCWorld } from 'mojang-minecraft'
import { Events } from './events.js';

export class World {
    /**
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly "events": Events;
    static readonly "events": Events;
    /**
     * @param dimensionName
     * The name of the Dimension
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension = MCWorld.getDimension;
    static getDimension = MCWorld.getDimension;
    /**
     * @remarks
     * Returns all players currently in the world.
     * @returns
     * All players currently in the world.
     */
    getPlayers = MCWorld.getPlayers;
    static getPlayers = MCWorld.getDimension;
}

export const world = new World;

World.events.blockDestructionStarted.subscribe((data) => {
    Commands.run(`say ${data.player.nameTag}`, World.getDimension("overworld"));
})
