import { Commands } from "mojang-minecraft"
import { World } from "./index.js"

const OVERWORLD = World.getDimension("overworld");

function sayData(eventName: string) {
    return function(data: any) {
        Commands.run(`say ${eventName}: ${JSON.stringify(data)}`, OVERWORLD);
    }
}

World.events.beforeChat.subscribe(sayData("beforeChat"));
World.events.beforeExplosion.subscribe(sayData("beforeExplosion"));
World.events.beforePistonActivate.subscribe(sayData("beforePistonActivate"));
World.events.blockDestructionStarted.subscribe(sayData("blockDestructionStarted"));
World.events.blockDestructionStopped.subscribe(sayData(""));
World.events.blockExplode.subscribe(sayData(""));
World.events.blockInteractedWith.subscribe(sayData(""));
World.events.chat.subscribe(sayData(""));
World.events.effectAdd.subscribe(sayData(""));
World.events.entityAcquiredItem.subscribe(sayData(""));
World.events.entityCarriedItemChanged.subscribe(sayData(""));
World.events.entityCreate.subscribe(sayData(""));
World.events.entityDeath.subscribe(sayData(""));
World.events.entityDroppedItem.subscribe(sayData(""));
World.events.entityEquippedArmor.subscribe(sayData(""));
World.events.entityStartedRiding.subscribe(sayData(""));
World.events.entityStopRiding.subscribe(sayData(""));
World.events.entityUseItem.subscribe(sayData(""));
World.events.explosion.subscribe(sayData(""));
World.events.pistonActivate.subscribe(sayData(""));
World.events.playerAttackedEntity.subscribe(sayData(""));
World.events.playerDestroyedBlock.subscribe(sayData(""));
World.events.playerPlacedBlock.subscribe(sayData(""));
World.events.tick.subscribe(sayData(""));
World.events.weatherChange.subscribe(sayData(""));
