"use strict";
const system = server.registerSystem(0, 0);
system.initialize = function () {
    system.listenForEvent("minecraft:block_destruction_started", createEventHandler("player"));
    system.listenForEvent("minecraft:block_destruction_stopped", createEventHandler("player"));
    system.listenForEvent("minecraft:block_interacted_with", createEventHandler("player"));
    system.listenForEvent("minecraft:entity_acquired_item", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_carried_item_changed", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_death", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_dropped_item", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_equipped_armor", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_start_riding", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_stop_riding", createEventHandler("entity"));
    system.listenForEvent("minecraft:entity_use_item", createEventHandler("entity"));
    system.listenForEvent("minecraft:player_attacked_entity", createEventHandler("player"));
    system.listenForEvent("minecraft:player_destroyed_block", createEventHandler("player"));
    system.listenForEvent("minecraft:player_placed_block", createEventHandler("player"));
};
function parseEntity(data) {
    if (data.__identifier__ === "minecraft:player") {
        const name = system.getComponent(data, "minecraft:nameable");
        if (name === null) {
            return;
        }
        return {
            type: "player",
            data: name.data.name,
        };
    }
    else {
        const pos = system.getComponent(data, "minecraft:position");
        if (pos === null) {
            return;
        }
        return {
            type: "entity",
            data: {
                id: data.__identifier__,
                x: pos.data.x,
                y: pos.data.y,
                z: pos.data.z,
            },
        };
    }
}
function parseItem(data) {
    return {
        type: "item",
        data: {
            name: data.item,
            count: data.count,
        }
    };
}
function parseProperty(data) {
    if (data.__type__ === "entity" || data.__type__ === "item_entity") {
        return parseEntity(data);
    }
    else if (data.__type__ === "item_stack") {
        return parseItem(data);
    }
    else if (data.x !== undefined && data.y !== undefined && data.z !== undefined) {
        return {
            type: "block",
            data: data,
        };
    }
    else {
        return {
            type: "raw",
            data: data
        };
    }
}
function createEventHandler(playerKey) {
    return function (data) {
        if (data.data[playerKey].__identifier__ !== "minecraft:player") {
            system.executeCommand(`/say failed: no player involved`, () => { });
            return;
        }
        const eventData = {
            id: data.__identifier__,
            data: {}
        };
        for (let property in data.data) {
            const propData = parseProperty(data.data[property]);
            if (property === "block_position") {
                property = "block";
            }
            eventData.data[property] = propData;
        }
        const playerData = eventData.data[playerKey];
        if (playerData === undefined) {
            system.executeCommand(`/say failed: play data did not exist`, () => { });
            return;
        }
        const playerName = playerData.data;
        const dataString = JSON.stringify(eventData).replace(/"/g, "'");
        system.executeCommand(`/execute "${playerName}" ~~~ summon data:json "${dataString}"`, () => { });
        system.executeCommand(`/say ${playerName} --- ${dataString}`, () => { });
    };
}
