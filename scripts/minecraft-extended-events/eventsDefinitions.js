import { subscribe, unsubscribe } from './eventDataConverter.js';
"minecraft:block_destruction_started";
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
"minecraft:block_destruction_stopped";
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
"minecraft:block_interacted_with";
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
    subscribe(callback) {
        subscribe("minecraft:entity_acquired_item", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_acquired_item", callback);
    }
}
"minecraft:entity_carried_item_changed";
export class EntityCarriedItemChangedEvent {
}
export class EntityCarriedItemChangedEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_carried_item_changed", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_carried_item_changed", callback);
    }
}
"minecraft:entity_death";
export class EntityDeathEvent {
}
export class EntityDeathEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_death", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_death", callback);
    }
}
"minecraft:entity_dropped_item";
export class EntityDroppedItemEvent {
}
export class EntityDroppedItemEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_dropped_item", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_dropped_item", callback);
    }
}
"minecraft:entity_equipped_armor";
export class EntityEquippedArmorEvent {
}
export class EntityEquippedArmorEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_equipped_armor", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_equipped_armor", callback);
    }
}
"minecraft:entity_start_riding";
export class EntityStartRidingEvent {
}
export class EntityStartRidingEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_start_riding", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_start_riding", callback);
    }
}
"minecraft:entity_stop_riding";
export class EntityStopRidingEvent {
}
export class EntityStopRidingEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_stop_riding", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_stop_riding", callback);
    }
}
"minecraft:entity_use_item";
export class EntityUseItemEvent {
}
export class EntityUseItemEventSignal {
    subscribe(callback) {
        subscribe("minecraft:entity_use_item", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:entity_use_item", callback);
    }
}
"minecraft:player_attacked_entity";
export class PlayerAttackedEntityEvent {
}
export class PlayerAttackedEntityEventSignal {
    subscribe(callback) {
        subscribe("minecraft:player_attacked_entity", callback);
        return callback;
    }
    unsubscribe(callback) {
        unsubscribe("minecraft:player_attacked_entity", callback);
    }
}
"minecraft:player_destroyed_block";
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
"minecraft:player_placed_block";
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
