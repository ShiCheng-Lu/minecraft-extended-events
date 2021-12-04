import { World } from "mojang-minecraft";
export class VanillaEvents {
    constructor() {
        this["beforeChat"] = World.events.beforeChat;
        this["beforeExplosion"] = World.events.beforeExplosion;
        this["beforePistonActivate"] = World.events.beforePistonActivate;
        this["blockExplode"] = World.events.blockExplode;
        this["chat"] = World.events.chat;
        this["effectAdd"] = World.events.effectAdd;
        this["entityCreate"] = World.events.entityCreate;
        this["explosion"] = World.events.explosion;
        this["pistonActivate"] = World.events.pistonActivate;
        this["tick"] = World.events.tick;
        this["weatherChange"] = World.events.weatherChange;
    }
}
