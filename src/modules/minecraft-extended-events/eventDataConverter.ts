///  <reference types="./event-data" />
import { BeforeExplosionEvent, BlockLocation, World, Dimension, ItemStack } from "mojang-minecraft"

World.events.beforeExplosion.subscribe(recieveData);

type EventCallback = (arg: any) => void

const callbacks: { [key: string]: EventCallback[] } = {}

export function subscribe(event: string, callback: EventCallback): EventCallback {
    if (callbacks[event] === undefined) {
        callbacks[event] = []
    }
    callbacks[event].push(callback);
    return callback;
}

export function unsubscribe(event: string, callback: EventCallback) {
    callbacks[event] = callbacks[event].filter(callback);
}

function parseData(arg: FieldData, dimension: Dimension) {
    if (arg === undefined) {
        return;
    } else if (arg.type === "player") {
        return World.getPlayers().find((value) => value.nameTag === arg.data);
    } else if (arg.type === "block") {
        const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
        return dimension.getBlock(location);
    } else if (arg.type === "entity") {
        const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
        return dimension.getEntitiesAtBlockLocation(location).find((value) => {
            value.id === arg.data.id;
        });
    } else if (arg.type === "itemStack") {
        return new ItemStack(arg.data.name, arg.data.amount, 0);
    } else {
        return arg.data;
    }
}

function recieveData(arg: BeforeExplosionEvent) {
    if (arg.source.id !== "data:json") return;
    arg.cancel = true; // stop the explosion

    // Commands.run(`say ${arg.source.nameTag}`, arg.dimension);

    const parsed: EventData = JSON.parse(arg.source.nameTag);
    if (parsed.type !== "script-event") return;

    const data: { [key: string]: any } = {}
    for (let property in parsed.data) {
        data[property] = parseData(parsed.data[property], arg.dimension);
    }
    data["dimension"] = arg.dimension;

    callbacks[parsed.id].forEach(callback => {
        callback(data);
    });
}
