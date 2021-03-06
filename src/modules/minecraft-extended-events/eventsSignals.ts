///  <reference types="minecraft-scripting-types-server" />
import { Block, Entity, Dimension, Player, ItemStack } from 'mojang-minecraft'
import { subscribe, unsubscribe } from './eventDataConverter.js';

export class BlockDestructionStartedEvent {
    "dimension": Dimension;
    "player": Player;
    "block": Block;
}
export class BlockDestructionStartedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block starts to be destroyed
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStartedEvent) => void): (arg: BlockDestructionStartedEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a block starts to be destroyed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStartedEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStoppedEvent) => void): (arg: BlockDestructionStoppedEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a block stops to be destroyed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStoppedEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: BlockInteractedWithEvent) => void): (arg: BlockInteractedWithEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player interacts with a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockInteractedWithEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: EntityAcquiredItemEvent) => void): (arg: EntityAcquiredItemEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity acquire an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityAcquiredItemEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: EntityCarriedItemChangedEvent) => void): (arg: EntityCarriedItemChangedEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityCarriedItemChanged, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when the carried item for an entity is changed
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityCarriedItemChangedEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityCarriedItemChanged, callback);
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
    * @param callback
    */
    subscribe(callback: (arg: EntityDeathEvent) => void): (arg: EntityDeathEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityDeath, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity dies
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDeathEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityDeath, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: EntityDroppedItemEvent) => void): (arg: EntityDroppedItemEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityDroppedItem, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity drops an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDroppedItemEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityDroppedItem, callback);
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
    * @param callback
    */
    subscribe(callback: (arg: EntityEquippedArmorEvent) => void): (arg: EntityEquippedArmorEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityEquippedArmor, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity equips an armor
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityEquippedArmorEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityEquippedArmor, callback);
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
        * @param callback
        */
    subscribe(callback: (arg: EntityStartRidingEvent) => void): (arg: EntityStartRidingEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityStartRiding, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity starts riding another entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityStartRidingEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityStartRiding, callback);
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
    * @param callback
    */
    subscribe(callback: (arg: EntityStopRidingEvent) => void): (arg: EntityStopRidingEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityStopRiding, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity stops riding another entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityStopRidingEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityStopRiding, callback);
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
    * @param callback
    */
    subscribe(callback: (arg: EntityUseItemEvent) => void): (arg: EntityUseItemEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.EntityUseItem, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when an entity uses an item
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityUseItemEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.EntityUseItem, callback);
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
    * @param callback
    */
    subscribe(callback: (arg: PlayerAttackedEntityEvent) => void): (arg: PlayerAttackedEntityEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.PlayerAttackedEntity, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player attacks an entity
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerAttackedEntityEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.PlayerAttackedEntity, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): (arg: PlayerDestroyedBlockEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player destroys a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
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
     * @param callback
     */
    subscribe(callback: (arg: PlayerPlacedBlockEvent) => void): (arg: PlayerPlacedBlockEvent) => void {
        return subscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
    }
    /**
     * @remarks
     * Removes a callback from being called from when a player places a block
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlacedBlockEvent) => void): void {
        return unsubscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
    }
}

ReceiveFromMinecraftServer.WeatherChanged;
