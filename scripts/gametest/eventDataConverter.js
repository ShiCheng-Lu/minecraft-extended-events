import { BlockLocation, World, ItemStack, Commands } from "mojang-minecraft";
World.events.beforeExplosion.subscribe(recieveData);
const callbacks = {};
function parseData(arg, dimension) {
    if (arg === undefined) {
        return;
    }
    else if (arg.type === "player") {
        return World.getPlayers().find((value) => value.nameTag === arg.data);
    }
    else if (arg.type === "block") {
        const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
        return dimension.getBlock(location);
    }
    else if (arg.type === "entity") {
        const location = new BlockLocation(arg.data.x, arg.data.y, arg.data.z);
        return dimension.getEntitiesAtBlockLocation(location).find((value) => {
            value.id === arg.data.id;
        });
    }
    else if (arg.type === "itemStack") {
        return new ItemStack(arg.data.name, arg.data.amount, 0);
    }
    else {
        return arg.data;
    }
}
function recieveData(arg) {
    Commands.run(`say ${JSON.stringify(arg)}`, arg.dimension);
    if (arg.source.id !== "data:json")
        return;
    arg.cancel = true;
    Commands.run(`say ${arg.source.nameTag}`, arg.dimension);
    const parsed = JSON.parse(arg.source.nameTag.replace(/'/g, '"'));
    const data = {};
    for (let property in parsed.data) {
        data[property] = parseData(parsed.data[property], arg.dimension);
    }
    data["dimension"] = arg.dimension;
    callbacks[parsed.id].forEach(callback => {
        Commands.run(`say calledback one function`, arg.dimension);
        callback(data);
    });
}
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
