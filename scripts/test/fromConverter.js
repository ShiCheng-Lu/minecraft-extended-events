import { Commands } from "mojang-minecraft";
import { World } from "../index.js";
import { subscribe } from "../gametest/eventDataConverter.js";
const OVERWORLD = World.getDimension("overworld");
function sayData(eventName) {
    return function (data) {
        Commands.run(`say ${eventName}`, OVERWORLD);
    };
}
subscribe("minecraft:block_destruction_started", sayData("blockDestructionStarted"));
subscribe("minecraft:block_destruction_stopped", sayData("blockDestructionStopped"));
subscribe("minecraft:block_interacted_with", sayData("blockInterctedWith"));
subscribe("minecraft:entity_acquired_item", sayData("entityAcquiredItem"));
subscribe("minecraft:entity_carried_item_changed", sayData("entityCarriedItemChanged"));
subscribe("minecraft:entity_death", sayData("entityDeath"));
subscribe("minecraft:entity_dropped_item", sayData("entityDroppedItem"));
subscribe("minecraft:entity_equipped_armor", sayData("entityEquippedArmor"));
subscribe("minecraft:entity_start_riding", sayData("entityStartRiding"));
subscribe("minecraft:entity_stop_riding", sayData("entityStopRiding"));
subscribe("minecraft:entity_use_item", sayData("entityUseItem"));
subscribe("minecraft:player_attacked_entity", sayData("playerAttackedEntity"));
subscribe("minecraft:player_destroyed_block", sayData("playerDestroyedBlock"));
subscribe("minecraft:player_placed_block", sayData("playerPlacedBlock"));
