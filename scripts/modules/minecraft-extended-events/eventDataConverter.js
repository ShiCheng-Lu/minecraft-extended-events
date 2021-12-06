import { BlockLocation, World, ItemStack } from "mojang-minecraft";
World.events.beforeExplosion.subscribe(recieveData);
const callbacks = {};
export function subscribe(event, callback) {
    if (callbacks[event] === undefined) {
        callbacks[event] = [];
    }
    callbacks[event].push(callback);
    return callback;
}
export function unsubscribe(event, callback) {
    callbacks[event] = callbacks[event].filter(callback);
}
function parseData(arg, dimension) {
    if (arg === undefined)
        return;
    switch (arg.type) {
        case ("player"):
            return World.getPlayers().find((value) => value.nameTag === arg.data);
        case ("block"): {
            const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
            return dimension.getBlock(location);
        }
        case ("entity"): {
            const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
            return dimension.getEntitiesAtBlockLocation(location).find((value) => {
                value.id === arg.data.id;
            });
        }
        case ("itemStack"):
            return new ItemStack(arg.data.name, arg.data.amount, 0);
        default:
            return arg.data;
    }
}
function recieveData(arg) {
    if (arg.source.id !== "data:json")
        return;
    arg.cancel = true;
    const parsed = JSON.parse(arg.source.nameTag);
    if (parsed.type !== "script-event")
        return;
    const data = {};
    for (let property in parsed.data) {
        data[property] = parseData(parsed.data[property], arg.dimension);
    }
    data["dimension"] = arg.dimension;
    callbacks[parsed.id].forEach(callback => {
        callback(data);
    });
}
