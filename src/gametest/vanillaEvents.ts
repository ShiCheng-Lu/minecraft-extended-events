import { World } from "mojang-minecraft";

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