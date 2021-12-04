import { subscribe, unsubscribe } from './eventDataConverter.js';
export class BlockDestructionStartedEvent {
}
export class BlockDestructionStartedEventSignal {
    subscribe(callback) {
        subscribe("minecraft:block_destruction_started", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:block_destruction_started", callback);
    }
}
export class BlockDestructionStoppedEvent {
}
export class BlockDestructionStoppedEventSignal {
    subscribe(callback) {
        subscribe("minecraft:block_destruction_stopped", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:block_destruction_stopped", callback);
    }
}
export class BlockInteractedWithEvent {
}
export class BlockInteractedWithEventSignal {
    subscribe(callback) {
        subscribe("minecraft:block_interacted_with", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:block_interacted_with", callback);
    }
}
"minecraft:entity_acquired_item";
export class EntityAcquiredItemEvent {
}
export class EntityAcquiredItemEventSignal {
}
"minecraft:entity_carried_item_changed";
export class EntityCarriedItemChangedEvent {
}
export class EntityCarriedItemChangedEventSignal {
}
"minecraft:entity_death";
export class EntityDeathEvent {
}
export class EntityDeathEventSignal {
}
"minecraft:entity_dropped_item";
export class EntityDroppedItemEvent {
}
export class EntityDroppedItemEventSignal {
}
"minecraft:entity_equipped_armor";
export class EntityEquippedArmorEvent {
}
export class EntityEquippedArmorEventSignal {
}
"minecraft:entity_start_riding";
export class EntityStartRidingEvent {
}
export class EntityStartRidingEventSignal {
}
"minecraft:entity_stop_riding";
export class EntityStopRidingEvent {
}
export class EntityStopRidingEventSignal {
}
"minecraft:entity_use_item";
export class EntityUseItemEvent {
}
export class EntityUseItemEventSignal {
}
"minecraft:piston_moved_block";
export class PistonMovedBlockEvent {
}
export class PistonMovedBlockEventSignal {
}
"minecraft:play_sound";
export class PlaySoundItemEvent {
}
export class PlaySoundEventSignal {
}
"minecraft:player_attacked_entity";
export class PlayerAttackedEntityEvent {
}
export class PlayerAttackedEntityEventSignal {
}
export class PlayerDestroyedBlockEvent {
}
export class PlayerDestroyedBlockEventSignal {
    subscribe(callback) {
        subscribe("minecraft:player_destroyed_block", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:player_destroyed_block", callback);
    }
}
export class PlayerPlacedBlockEvent {
}
export class PlayerPlacedBlockEventSignal {
    subscribe(callback) {
        subscribe("minecraft:player_placed_block", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:player_placed_block", callback);
    }
}
"minecraft:weather_changed";
