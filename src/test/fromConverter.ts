///  <reference types="minecraft-scripting-types-server" />

import { Commands } from "mojang-minecraft"
import { World } from "../minecraft-extended-events.js"
import { subscribe } from "../minecraft-extended-events/eventDataConverter.js"

const OVERWORLD = World.getDimension("overworld");

function sayData(eventName: string) {
    return function(data: any) {
        Commands.run(`say ${eventName}`, OVERWORLD);
    }
}

subscribe(ReceiveFromMinecraftServer.BlockDestructionStarted, sayData("blockDestructionStarted"));
subscribe(ReceiveFromMinecraftServer.BlockDestructionStopped, sayData("blockDestructionStopped"));
subscribe(ReceiveFromMinecraftServer.BlockInteractedWith, sayData("blockInterctedWith"));
subscribe(ReceiveFromMinecraftServer.EntityAcquiredItem, sayData("entityAcquiredItem"));
subscribe(ReceiveFromMinecraftServer.EntityCarriedItemChanged, sayData("entityCarriedItemChanged"));
subscribe(ReceiveFromMinecraftServer.EntityDeath, sayData("entityDeath"));
subscribe(ReceiveFromMinecraftServer.EntityDroppedItem, sayData("entityDroppedItem"));
subscribe(ReceiveFromMinecraftServer.EntityEquippedArmor, sayData("entityEquippedArmor"));
subscribe(ReceiveFromMinecraftServer.EntityStartRiding, sayData("entityStartRiding"));
subscribe(ReceiveFromMinecraftServer.EntityStopRiding, sayData("entityStopRiding"));
subscribe(ReceiveFromMinecraftServer.EntityUseItem, sayData("entityUseItem"));
subscribe(ReceiveFromMinecraftServer.PlayerAttackedEntity, sayData("playerAttackedEntity"));
subscribe(ReceiveFromMinecraftServer.PlayerDestroyedBlock, sayData("playerDestroyedBlock"));
subscribe(ReceiveFromMinecraftServer.PlayerPlacedBlock, sayData("playerPlacedBlock"));