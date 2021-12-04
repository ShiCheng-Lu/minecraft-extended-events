//  <reference types="minecraft-scripting-types-server" />
import { Block, Entity, Dimension } from 'mojang-minecraft'
import { subscribe, unsubscribe } from './eventDataConverter.js';

export class BlockDestructionStartedEvent {
    // the entity that started to destroy the block
    "player": Entity;
    "block": Block;
    "dimension": Dimension
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

export class BlockDestructionStoppedEvent {
    // the entity that started to destroy the block
    "player": Entity;

    "block": Block;
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

export class BlockInteractedWithEvent {
    // the entity that started to destroy the block
    "player": Entity;

    "block": Block;
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
export class EntityAcquiredItemEvent { }
export class EntityAcquiredItemEventSignal { }

ReceiveFromMinecraftServer.EntityCarriedItemChanged;
export class EntityCarriedItemChangedEvent { }
export class EntityCarriedItemChangedEventSignal { }

// ReceiveFromMinecraftServer.EntityCreated;
ReceiveFromMinecraftServer.EntityDeath;
export class EntityDeathEvent { }
export class EntityDeathEventSignal { }

ReceiveFromMinecraftServer.EntityDroppedItem;
export class EntityDroppedItemEvent { }
export class EntityDroppedItemEventSignal { }

ReceiveFromMinecraftServer.EntityEquippedArmor;
export class EntityEquippedArmorEvent { }
export class EntityEquippedArmorEventSignal { }

ReceiveFromMinecraftServer.EntityStartRiding;
export class EntityStartRidingEvent { }
export class EntityStartRidingEventSignal { }

ReceiveFromMinecraftServer.EntityStopRiding;
export class EntityStopRidingEvent { }
export class EntityStopRidingEventSignal { }

// ReceiveFromMinecraftServer.EntityTick;
ReceiveFromMinecraftServer.EntityUseItem;
export class EntityUseItemEvent { }
export class EntityUseItemEventSignal { }

ReceiveFromMinecraftServer.PistonMovedBlock;
export class PistonMovedBlockEvent { }
export class PistonMovedBlockEventSignal { }

ReceiveFromMinecraftServer.PlaySound;
export class PlaySoundItemEvent { }
export class PlaySoundEventSignal { }

ReceiveFromMinecraftServer.PlayerAttackedEntity;
export class PlayerAttackedEntityEvent { }
export class PlayerAttackedEntityEventSignal { }


export class PlayerDestroyedBlockEvent {
    // the entity that started to destroy the block
    "player": Entity;

    "block": Block;
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
