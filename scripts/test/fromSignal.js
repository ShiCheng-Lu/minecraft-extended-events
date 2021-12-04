import { Commands } from "mojang-minecraft";
import { World } from "../minecraft-extended-events.js";
import * as Signal from "../minecraft-extended-events/eventsDefinitions.js";
const OVERWORLD = World.getDimension("overworld");
function sayData(eventName) {
    return function (data) {
        Commands.run(`say ${eventName}`, OVERWORLD);
    };
}
(new Signal.BlockDestructionStartedEventSignal).subscribe(sayData("blockDestructionStarted"));
(new Signal.BlockDestructionStoppedEventSignal).subscribe(sayData("blockDestructionStopped"));
(new Signal.BlockInteractedWithEventSignal).subscribe(sayData("blockInterctedWith"));
(new Signal.EntityAcquiredItemEventSignal).subscribe(sayData("entityAcquiredItem"));
(new Signal.EntityCarriedItemChangedEventSignal).subscribe(sayData("entityCarriedItemChanged"));
(new Signal.EntityDeathEventSignal).subscribe(sayData("entityDeath"));
(new Signal.EntityDroppedItemEventSignal).subscribe(sayData("entityDroppedItem"));
(new Signal.EntityEquippedArmorEventSignal).subscribe(sayData("entityEquippedArmor"));
(new Signal.EntityStartRidingEventSignal).subscribe(sayData("entityStartRiding"));
(new Signal.EntityStopRidingEventSignal).subscribe(sayData("entityStopRiding"));
(new Signal.EntityUseItemEventSignal).subscribe(sayData("entityUseItem"));
(new Signal.PlayerAttackedEntityEventSignal).subscribe(sayData("playerAttackedEntity"));
(new Signal.PlayerDestroyedBlockEventSignal).subscribe(sayData("playerDestroyedBlock"));
(new Signal.PlayerPlacedBlockEventSignal).subscribe(sayData("playerPlacedBlock"));
