import { subscribe, unsubscribe } from './eventDataConverter.js';
export class BlockDestructionStartedEvent {
}
export class BlockDestructionStartedEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:block_destruction_started", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:block_destruction_started", callback);
    }
}
"minecraft:block_destruction_stopped";
export class BlockDestructionStoppedEvent {
}
export class BlockDestructionStoppedEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:block_destruction_stopped", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:block_destruction_stopped", callback);
    }
}
"minecraft:block_interacted_with";
export class BlockInteractedWithEvent {
}
export class BlockInteractedWithEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:block_interacted_with", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:block_interacted_with", callback);
    }
}
"minecraft:entity_acquired_item";
export class EntityAcquiredItemEvent {
}
export class EntityAcquiredItemEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_acquired_item", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_acquired_item", callback);
    }
}
"minecraft:entity_carried_item_changed";
export class EntityCarriedItemChangedEvent {
}
export class EntityCarriedItemChangedEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_carried_item_changed", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_carried_item_changed", callback);
    }
}
"minecraft:entity_death";
export class EntityDeathEvent {
}
export class EntityDeathEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_death", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_death", callback);
    }
}
"minecraft:entity_dropped_item";
export class EntityDroppedItemEvent {
}
export class EntityDroppedItemEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_dropped_item", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_dropped_item", callback);
    }
}
"minecraft:entity_equipped_armor";
export class EntityEquippedArmorEvent {
}
export class EntityEquippedArmorEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_equipped_armor", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_equipped_armor", callback);
    }
}
"minecraft:entity_start_riding";
export class EntityStartRidingEvent {
}
export class EntityStartRidingEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_start_riding", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_start_riding", callback);
    }
}
"minecraft:entity_stop_riding";
export class EntityStopRidingEvent {
}
export class EntityStopRidingEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_stop_riding", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_stop_riding", callback);
    }
}
"minecraft:entity_use_item";
export class EntityUseItemEvent {
}
export class EntityUseItemEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:entity_use_item", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:entity_use_item", callback);
    }
}
"minecraft:player_attacked_entity";
export class PlayerAttackedEntityEvent {
}
export class PlayerAttackedEntityEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:player_attacked_entity", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:player_attacked_entity", callback);
    }
}
"minecraft:player_destroyed_block";
export class PlayerDestroyedBlockEvent {
}
export class PlayerDestroyedBlockEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:player_destroyed_block", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:player_destroyed_block", callback);
    }
}
"minecraft:player_placed_block";
export class PlayerPlacedBlockEvent {
}
export class PlayerPlacedBlockEventSignal {
    subscribe(callback) {
        return subscribe("minecraft:player_placed_block", callback);
    }
    unsubscribe(callback) {
        return unsubscribe("minecraft:player_placed_block", callback);
    }
}
"minecraft:weather_changed";
