import { World as MCWorld } from 'mojang-minecraft'
import { Events } from './events.js';

export class World {
    /**
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly "events" = new Events;
    static readonly "events" = new Events;
    /**
     * @param dimensionName
     * The name of the Dimension
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimension: "overworld" | "nether" | "the end") {
        return MCWorld.getDimension(dimension);
    }
    static getDimension(dimension: "overworld" | "nether" | "the end") {
        return MCWorld.getDimension(dimension);
    }
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
