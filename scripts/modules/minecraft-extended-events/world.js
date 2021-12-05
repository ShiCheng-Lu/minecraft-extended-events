import { World as MCWorld } from 'mojang-minecraft';
import { Events } from './events.js';
export class World {
    constructor() {
        this["events"] = new Events;
    }
    getDimension(dimension) {
        return MCWorld.getDimension(dimension);
    }
    static getDimension(dimension) {
        return MCWorld.getDimension(dimension);
    }
    getPlayers() {
        return MCWorld.getPlayers();
    }
    static getPlayers() {
        return MCWorld.getPlayers();
    }
}
World["events"] = new Events;
export const world = new World;
