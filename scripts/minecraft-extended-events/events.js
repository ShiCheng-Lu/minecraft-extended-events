import * as Signal from "./eventsDefinitions.js";
import { VanillaEvents } from "./vanillaEvents.js";
export * from "./eventsDefinitions.js";
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
