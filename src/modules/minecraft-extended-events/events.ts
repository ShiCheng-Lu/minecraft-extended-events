import { World } from "mojang-minecraft"
import * as Signal from "./eventsSignals.js"

export * from "./eventsSignals.js"

export class VanillaEvents {
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    "beforeChat" = World.events.beforeChat;
    /**
     * This event is fired before an explosion occurs.
     */
    "beforeExplosion" = World.events.beforeExplosion;
    /**
     * Fires before a piston is activated.
     */
    "beforePistonActivate" = World.events.beforePistonActivate;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     */
    "blockExplode" = World.events.blockExplode;
    /**
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     */
    "chat" = World.events.chat;
    /**
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     */
    "effectAdd" = World.events.effectAdd;
    /**
     * This event fires when a new entity is created.
     */
    "entityCreate" = World.events.entityCreate;
    /**
     * This event is fired after an explosion occurs.
     */
    "explosion" = World.events.explosion;
    /**
     * This event fires when a piston expands or retracts.
     */
    "pistonActivate" = World.events.pistonActivate;
    /**
     * This event fires every tick - which is 20 times per second.
     */
    "tick" = World.events.tick;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    "weatherChange" = World.events.weatherChange;
}


export class Events extends VanillaEvents {
    /**
     * This event is triggered whenever a player starts to destroy a block.
     */
    "blockDestructionStarted" = new Signal.BlockDestructionStartedEventSignal;
    /**
     * This event is triggered whenever a player stops destroying a block.
     */
    "blockDestructionStopped" = new Signal.BlockDestructionStoppedEventSignal;
    /**
     * This event is triggered whenever a player interacts with a block.
     */
    "blockInteractedWith" = new Signal.BlockInteractedWithEventSignal;
    /**
     * This event is triggered whenever an entity acquires an item.
     */
    "entityAcquiredItem" = new Signal.EntityAcquiredItemEventSignal;
    /**
     * This event is triggered whenever an entity changes the item carried in their hand.
     */
    "entityCarriedItemChanged" = new Signal.EntityCarriedItemChangedEventSignal;
    /**
     * This event is triggered whenever an entity dies. This won't be triggered when an entity is removed (such as when using destroyEntity).
     */
    "entityDeath" = new Signal.EntityDeathEventSignal;
    /**
     * This event is triggered whenever an entity drops an item.
     */
    "entityDroppedItem" = new Signal.EntityDroppedItemEventSignal;
    /**
     * This event is triggered whenever an entity equips an item in their armor slots.
     */
    "entityEquippedArmor" = new Signal.EntityEquippedArmorEventSignal;
    /**
     * This event is triggered whenever an entity becomes a rider on another entity.
     */
    "entityStartedRiding" = new Signal.EntityStartRidingEventSignal;
    /**
     * This event is triggered whenever an entity stops riding another entity.
     */
    "entityStopRiding" = new Signal.EntityStopRidingEventSignal;
    /**
     * This event is triggered whenever an entity uses an item.
     */
    "entityUseItem" = new Signal.EntityUseItemEventSignal;
    /**
     * This event is triggered whenever a piston moves a block.
     */
    // "pistonMoveBlock": PistonMovedBlockEventSignal;
    /**
     * This event is used to play a sound effect. Currently, sounds can only be played at a fixed position in the world. Global sounds and sounds played by an entity will be supported in a later update.
     */
    // "playSound": PlaySoundEventSignal;
    /**
     * This event is triggered whenever a player attacks an entity.
     */
    "playerAttackedEntity" = new Signal.PlayerAttackedEntityEventSignal;
    /**
     * This event is triggered whenever a player destroys a block.
     */
    "playerDestroyedBlock" = new Signal.PlayerDestroyedBlockEventSignal;
    /**
     * This event is triggered whenever a player places a block.
     */
    "playerPlacedBlock" = new Signal.PlayerPlacedBlockEventSignal;
}