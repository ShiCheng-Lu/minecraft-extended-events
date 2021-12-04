import { World as MCWorld } from 'mojang-minecraft';
import { Events } from './events.js';
export class World {
    constructor() {
        this["events"] = new Events;
        this.getPlayers = MCWorld.getPlayers;
    }
    getDimension(dimension) {
        return MCWorld.getDimension(dimension);
    }
    static getDimension(dimension) {
        return MCWorld.getDimension(dimension);
    }
}
World["events"] = new Events;
World.getPlayers = MCWorld.getDimension;
export const world = new World;
