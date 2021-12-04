import { BeforeExplosionEvent, BlockLocation, World, Dimension } from "mojang-minecraft"

World.events.beforeExplosion.subscribe(recieveData);

type EventCallback = (arg: any) => void

const callbacks: { [key: string]: EventCallback[] } = {}

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
    } else {
        return arg.data;
    }
}

function recieveData(arg: BeforeExplosionEvent) {
    if (arg.source.id !== "data:json") return;

    // Commands.run(`say ${arg.source.nameTag}`, arg.dimension);
    // Commands.run(`say ${arg.source.getComponent("explode").id}`, World.getDimension("overworld"));

    const parsed: EventData = JSON.parse(arg.source.nameTag.replace(/'/g, '"'));
    const data: { [key: string]: any } = {}
    for (let property in parsed.data) {
        data[property] = parseData(parsed.data[property], arg.dimension);
    }
    data["dimension"] = arg.dimension;

    callbacks[parsed.id].forEach(callback => {
        callback(data);
    });
}

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
