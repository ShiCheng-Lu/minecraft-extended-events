import { Commands } from "mojang-minecraft"
import { World } from "../modules/minecraft-extended-events/index.js"
import * as Signal from "../modules/minecraft-extended-events/eventsSignals.js"

const OVERWORLD = World.getDimension("overworld");

function sayData(eventName: string) {
    return function(data: any) {
        Commands.run(`say ${eventName}`, OVERWORLD);
    }
}

// (new Signal.BeforeChatEventSignal).subscribe(sayData("beforeChat"));
// (new Signal.BeforeExplosionEventSignal).subscribe(sayData("beforeExplosion"));
// (new Signal.BeforePistonActivateEventSignal).subscribe(sayData("beforePistonActivate"));
(new Signal.BlockDestructionStartedEventSignal).subscribe(sayData("blockDestructionStarted"));
(new Signal.BlockDestructionStoppedEventSignal).subscribe(sayData("blockDestructionStopped"));
// (new Signal.BlockExplodeEventSignal).subscribe(sayData("blockExplode"));
(new Signal.BlockInteractedWithEventSignal).subscribe(sayData("blockInterctedWith"));
// (new Signal.ChatEventSignal).subscribe(sayData("chat"));
// (new Signal.EffectAddEventSignal).subscribe(sayData("effectAdd"));
(new Signal.EntityAcquiredItemEventSignal).subscribe(sayData("entityAcquiredItem"));
(new Signal.EntityCarriedItemChangedEventSignal).subscribe(sayData("entityCarriedItemChanged"));
// (new Signal.EntityCreateEventSignal).subscribe(sayData("entityCreate"));
(new Signal.EntityDeathEventSignal).subscribe(sayData("entityDeath"));
(new Signal.EntityDroppedItemEventSignal).subscribe(sayData("entityDroppedItem"));
(new Signal.EntityEquippedArmorEventSignal).subscribe(sayData("entityEquippedArmor"));
(new Signal.EntityStartRidingEventSignal).subscribe(sayData("entityStartRiding"));
(new Signal.EntityStopRidingEventSignal).subscribe(sayData("entityStopRiding"));
(new Signal.EntityUseItemEventSignal).subscribe(sayData("entityUseItem"));
// (new Signal.ExplosionEventSignal).subscribe(sayData("explosion"));
// (new Signal.PistonActivateEventSignal).subscribe(sayData("pistonActivate"));
(new Signal.PlayerAttackedEntityEventSignal).subscribe(sayData("playerAttackedEntity"));
(new Signal.PlayerDestroyedBlockEventSignal).subscribe(sayData("playerDestroyedBlock"));
(new Signal.PlayerPlacedBlockEventSignal).subscribe(sayData("playerPlacedBlock"));
// (new Signal.TickEventSignal).subscribe(sayData("tick"));
// (new Signal.WeatherChangeEventSignal).subscribe(sayData("weatherChanged"));
