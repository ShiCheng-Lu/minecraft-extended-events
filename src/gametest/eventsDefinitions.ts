//  <reference types="minecraft-scripting-types-server" />
import { Block, Entity, Dimension, Player, ItemStack } from 'mojang-minecraft'
import { subscribe, unsubscribe } from './eventDataConverter.js';

ReceiveFromMinecraftServer.BlockDestructionStarted;
export class BlockDestructionStartedEvent {
    "dimension": Dimension;
    "player": Player;
    "block": Block;
}
export class BlockDestructionStartedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block starts to be destroyed
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStartedEvent) => void): (arg: BlockDestructionStartedEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a block starts to be destroyed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStartedEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
    }
}

ReceiveFromMinecraftServer.BlockDestructionStopped;
export class BlockDestructionStoppedEvent {
    "dimension": Dimension;
    "player": Player;
    "block": Block;
    "destruction_progress": number;
}
export class BlockDestructionStoppedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block stops to be destroyed
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStoppedEvent) => void): (arg: BlockDestructionStoppedEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a block stops to be destroyed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStoppedEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
    }
}

ReceiveFromMinecraftServer.BlockInteractedWith;
export class BlockInteractedWithEvent {
    "dimension": Dimension;
    "player": Player;
    "block": Block;
}
export class BlockInteractedWithEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player interacts with a block
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockInteractedWithEvent) => void): (arg: BlockInteractedWithEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player interacts with a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockInteractedWithEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
    }
}

ReceiveFromMinecraftServer.EntityAcquiredItem;
export class EntityAcquiredItemEvent {
    "dimension": Dimension;
    "entity": Player;
    "item_stack": ItemStack;
    "aquired_amount": number;
    "acquisition_method": string;
    "secondary_entity": Entity;
}
export class EntityAcquiredItemEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity acquire an item
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: EntityAcquiredItemEvent) => void): (arg: EntityAcquiredItemEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity acquire an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityAcquiredItemEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
    }
}

ReceiveFromMinecraftServer.EntityCarriedItemChanged;
export class EntityCarriedItemChangedEvent {
    "dimension": Dimension;
    "carried_item": ItemStack;
    "entity": Player;
    "previous_carried_item": ItemStack;
}
export class EntityCarriedItemChangedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when the carried item for an entity is changed
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: EntityCarriedItemChangedEvent) => void): (arg: EntityCarriedItemChangedEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityCarriedItemChanged, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when the carried item for an entity is changed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityCarriedItemChangedEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityCarriedItemChanged, callback);
    }
}

// ReceiveFromMinecraftServer.EntityCreated;
ReceiveFromMinecraftServer.EntityDeath;
export class EntityDeathEvent {
    "dimension": Dimension;
    "entity": Player;
}
export class EntityDeathEventSignal {
    /**
    * @remarks
    * Adds a callback that will be called when an entity dies
    * explosion behavior.
    * @param callback
    */
    subscribe(callback: (arg: EntityDeathEvent) => void): (arg: EntityDeathEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityDeath, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity dies
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDeathEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityDeath, callback);
    }
}

ReceiveFromMinecraftServer.EntityDroppedItem;
export class EntityDroppedItemEvent {
    "dimension": Dimension;
    "entity": Player;
    "item_stack": ItemStack;
}
export class EntityDroppedItemEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity drops an item
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: EntityDroppedItemEvent) => void): (arg: EntityDroppedItemEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityDroppedItem, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity drops an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDroppedItemEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityDroppedItem, callback);
    }
}

ReceiveFromMinecraftServer.EntityEquippedArmor;
export class EntityEquippedArmorEvent {
    "dimension": Dimension;
    "entity": Player;
    "item_stack": ItemStack;
}
export class EntityEquippedArmorEventSignal {
    /**
    * @remarks
    * Adds a callback that will be called when an entity equips an armor
    * explosion behavior.
    * @param callback
    */
    subscribe(callback: (arg: EntityEquippedArmorEvent) => void): (arg: EntityEquippedArmorEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityEquippedArmor, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity equips an armor
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityEquippedArmorEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityEquippedArmor, callback);
    }
}

ReceiveFromMinecraftServer.EntityStartRiding;
export class EntityStartRidingEvent {
    "dimension": Dimension;
    "entity": Player;
    "ride": Entity;
}
export class EntityStartRidingEventSignal {
    /**
        * @remarks
        * Adds a callback that will be called when an entity starts riding another entity
        * explosion behavior.
        * @param callback
        */
    subscribe(callback: (arg: EntityStartRidingEvent) => void): (arg: EntityStartRidingEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityStartRiding, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity starts riding another entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityStartRidingEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityStartRiding, callback);
    }
}

ReceiveFromMinecraftServer.EntityStopRiding;
export class EntityStopRidingEvent {
    "dimension": Dimension;
    "entity": Player;
    "entity_is_being_destroyed": boolean;
    "exit_from_rider": boolean;
    "switching_rides": boolean;
}
export class EntityStopRidingEventSignal {
    /**
    * @remarks
    * Adds a callback that will be called when an entity stops riding another entity
    * explosion behavior.
    * @param callback
    */
    subscribe(callback: (arg: EntityStopRidingEvent) => void): (arg: EntityStopRidingEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityStopRiding, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity stops riding another entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityStopRidingEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityStopRiding, callback);
    }
}

// ReceiveFromMinecraftServer.EntityTick;
ReceiveFromMinecraftServer.EntityUseItem;
export class EntityUseItemEvent {
    "dimension": Dimension;
    "entity": Player;
    "item_stack": ItemStack;
    "use_method": string;
}
export class EntityUseItemEventSignal {
    /**
    * @remarks
    * Adds a callback that will be called when an entity uses an item
    * explosion behavior.
    * @param callback
    */
    subscribe(callback: (arg: EntityUseItemEvent) => void): (arg: EntityUseItemEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityUseItem, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity uses an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityUseItemEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityUseItem, callback);
    }
}

// ReceiveFromMinecraftServer.PistonMovedBlock;
// ReceiveFromMinecraftServer.PlaySound;

ReceiveFromMinecraftServer.PlayerAttackedEntity;
export class PlayerAttackedEntityEvent {
    "dimension": Dimension;
    "attacked_entity": Entity;
    "player": Player;
}
export class PlayerAttackedEntityEventSignal {
    /**
    * @remarks
    * Adds a callback that will be called when a player attacks an entity
    * explosion behavior.
    * @param callback
    */
    subscribe(callback: (arg: PlayerAttackedEntityEvent) => void): (arg: PlayerAttackedEntityEvent) => void {
        subscribe(ReceiveFromMinecraftServer.PlayerAttackedEntity, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player attacks an entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerAttackedEntityEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.PlayerAttackedEntity, callback);
    }
}


ReceiveFromMinecraftServer.PlayerDestroyedBlock;
export class PlayerDestroyedBlockEvent {
    "dimension": Dimension;
    "player": Player;
    "block": Block;
    "block_identifier": Block;
}
export class PlayerDestroyedBlockEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player destroys a block
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): (arg: PlayerDestroyedBlockEvent) => void {
        subscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player destroys a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
    }
}

ReceiveFromMinecraftServer.PlayerPlacedBlock;
export class PlayerPlacedBlockEvent {
    "dimension": Dimension;
    "player": Entity;
    "block": Block;
}
export class PlayerPlacedBlockEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player places a block
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: PlayerPlacedBlockEvent) => void): (arg: PlayerPlacedBlockEvent) => void {
        subscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player places a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlacedBlockEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
    }
}

ReceiveFromMinecraftServer.WeatherChanged;
