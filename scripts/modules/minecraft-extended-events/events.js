import { World } from "mojang-minecraft";
import * as Signal from "./eventsSignals.js";
export * from "./eventsSignals.js";
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
export class Events extends VanillaEvents {
    constructor() {
        super(...arguments);
        this["blockDestructionStarted"] = new Signal.BlockDestructionStartedEventSignal;
        this["blockDestructionStopped"] = new Signal.BlockDestructionStoppedEventSignal;
        this["blockInteractedWith"] = new Signal.BlockInteractedWithEventSignal;
        this["entityAcquiredItem"] = new Signal.EntityAcquiredItemEventSignal;
        this["entityCarriedItemChanged"] = new Signal.EntityCarriedItemChangedEventSignal;
        this["entityDeath"] = new Signal.EntityDeathEventSignal;
        this["entityDroppedItem"] = new Signal.EntityDroppedItemEventSignal;
        this["entityEquippedArmor"] = new Signal.EntityEquippedArmorEventSignal;
        this["entityStartedRiding"] = new Signal.EntityStartRidingEventSignal;
        this["entityStopRiding"] = new Signal.EntityStopRidingEventSignal;
        this["entityUseItem"] = new Signal.EntityUseItemEventSignal;
        this["playerAttackedEntity"] = new Signal.PlayerAttackedEntityEventSignal;
        this["playerDestroyedBlock"] = new Signal.PlayerDestroyedBlockEventSignal;
        this["playerPlacedBlock"] = new Signal.PlayerPlacedBlockEventSignal;
    }
}
