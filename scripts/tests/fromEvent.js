import { Commands } from "mojang-minecraft";
import { World } from "../modules/minecraft-extended-events/index.js";
const OVERWORLD = World.getDimension("overworld");
function sayData(eventName) {
    return function (data) {
        Commands.run(`say ${eventName} : ${JSON.stringify(data)}`, OVERWORLD);
    };
}
World.events.beforeChat.subscribe(sayData("beforeChat"));
World.events.beforeExplosion.subscribe(sayData("beforeExplosion"));
World.events.beforePistonActivate.subscribe(sayData("beforePistonActivate"));
World.events.blockDestructionStarted.subscribe(sayData("blockDestructionStarted"));
World.events.blockDestructionStopped.subscribe(sayData("blockDestructionStopped"));
World.events.blockExplode.subscribe(sayData("blockExplode"));
World.events.blockInteractedWith.subscribe(sayData("blockInterctedWith"));
World.events.chat.subscribe(sayData("chat"));
World.events.effectAdd.subscribe(sayData("effectAdd"));
World.events.entityAcquiredItem.subscribe(sayData("entityAcquiredItem"));
World.events.entityCarriedItemChanged.subscribe(sayData("entityCarriedItemChanged"));
World.events.entityCreate.subscribe(sayData("entityCreate"));
World.events.entityDeath.subscribe(sayData("entityDeath"));
World.events.entityDroppedItem.subscribe(sayData("entityDroppedItem"));
World.events.entityEquippedArmor.subscribe(sayData("entityEquippedArmor"));
World.events.entityStartedRiding.subscribe(sayData("entityStartedRiding"));
World.events.entityStopRiding.subscribe(sayData("entityStopRiding"));
World.events.entityUseItem.subscribe(sayData("entityUseItem"));
World.events.explosion.subscribe(sayData("explosion"));
World.events.pistonActivate.subscribe(sayData("pistonActivate"));
World.events.playerAttackedEntity.subscribe(sayData("playerAttackedEntity"));
World.events.playerDestroyedBlock.subscribe(sayData("playerDestroyedBlock"));
World.events.playerPlacedBlock.subscribe(sayData("playerPlacedBlock"));
World.events.weatherChange.subscribe(sayData("weatherChanged"));
