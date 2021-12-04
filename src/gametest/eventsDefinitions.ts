//  <reference types="minecraft-scripting-types-server" />
import { Block, Entity, Dimension, Player, ItemStack } from 'mojang-minecraft'
import { subscribe, unsubscribe } from './eventDataConverter.js';

ReceiveFromMinecraftServer.BlockDestructionStarted;
export class BlockDestructionStartedEvent {
    "player": Player;
    "block": Block;
    "dimension": Dimension;
}
export class BlockDestructionStartedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction starts
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStartedEvent) => void): (arg: BlockDestructionStartedEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction starts
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStartedEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, callback);
    }
}

ReceiveFromMinecraftServer.BlockDestructionStopped;
export class BlockDestructionStoppedEvent {
    "player": Player;
    "block": Block;
    "destruction_progress": number
    "dimension": Dimension;
}
export class BlockDestructionStoppedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction stops
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockDestructionStoppedEvent) => void): (arg: BlockDestructionStoppedEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction stops
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockDestructionStoppedEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, callback);
    }
}

ReceiveFromMinecraftServer.BlockInteractedWith;
export class BlockInteractedWithEvent {
    "player": Player;
    "block": Block;
    "dimension": Dimension;
}
export class BlockInteractedWithEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction stops
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BlockInteractedWithEvent) => void): (arg: BlockInteractedWithEvent) => void {
        subscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction stops
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockInteractedWithEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.BlockInteractedWith, callback);
    }
}

ReceiveFromMinecraftServer.EntityAcquiredItem;
export class EntityAcquiredItemEvent {
    "entity": Player;
    "item_stack": ItemStack;
    "aquired_amount": number;
    "acquisition_method": string;
    "secondary_entity": Entity;
}
export class EntityAcquiredItemEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction stops
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: EntityAcquiredItemEvent) => void): (arg: EntityAcquiredItemEvent) => void {
        subscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction stops
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityAcquiredItemEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, callback);
    }
}

ReceiveFromMinecraftServer.EntityCarriedItemChanged;
export class EntityCarriedItemChangedEvent {
    "carried_item": ItemStack;
    "entity": Player;
    "previous_carried_item": ItemStack;
}
export class EntityCarriedItemChangedEventSignal { }

// ReceiveFromMinecraftServer.EntityCreated;
ReceiveFromMinecraftServer.EntityDeath;
export class EntityDeathEvent {
    "entity": Player;
}
export class EntityDeathEventSignal { }

ReceiveFromMinecraftServer.EntityDroppedItem;
export class EntityDroppedItemEvent {
    "entity": Player;
    "item_stack": ItemStack;
}
export class EntityDroppedItemEventSignal { }

ReceiveFromMinecraftServer.EntityEquippedArmor;
export class EntityEquippedArmorEvent {
    "entity": Player;
    "item_stack": ItemStack;
}
export class EntityEquippedArmorEventSignal { }

ReceiveFromMinecraftServer.EntityStartRiding;
export class EntityStartRidingEvent {
    "entity": Player;
    "ride": Entity;
}
export class EntityStartRidingEventSignal { }

ReceiveFromMinecraftServer.EntityStopRiding;
export class EntityStopRidingEvent {
    "entity": Player;
    "entity_is_being_destroyed": boolean;
    "exit_from_rider": boolean;
    "switching_rides": boolean;
}
export class EntityStopRidingEventSignal { }

// ReceiveFromMinecraftServer.EntityTick;
ReceiveFromMinecraftServer.EntityUseItem;
export class EntityUseItemEvent {
    "entity": Player;
    "item_stack": ItemStack;
    "use_method": string;
}
export class EntityUseItemEventSignal { }

// ReceiveFromMinecraftServer.PistonMovedBlock;
// ReceiveFromMinecraftServer.PlaySound;

ReceiveFromMinecraftServer.PlayerAttackedEntity;
export class PlayerAttackedEntityEvent {
    "attacked_entity": Entity;
    "player": Player;
}
export class PlayerAttackedEntityEventSignal { }


ReceiveFromMinecraftServer.PlayerDestroyedBlock;
export class PlayerDestroyedBlockEvent {
    // the entity that started to destroy the block
    "player": Player;
    "block": Block;
    "block_identifier": Block;
}
export class PlayerDestroyedBlockEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction stops
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): (arg: PlayerDestroyedBlockEvent) => void {
        subscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction stops
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDestroyedBlockEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, callback);
    }
}

ReceiveFromMinecraftServer.PlayerPlacedBlock;
export class PlayerPlacedBlockEvent {
    // the entity that started to destroy the block
    "player": Entity;
    "block": Block;
}
export class PlayerPlacedBlockEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block destruction stops
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: PlayerPlacedBlockEvent) => void): (arg: PlayerPlacedBlockEvent) => void {
        subscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
        return callback;
    }
    /**
     * @remarks
     * Removes a callback from being called from when block destruction stops
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlacedBlockEvent) => void): void {
        unsubscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, callback);
    }
}

ReceiveFromMinecraftServer.WeatherChanged;
