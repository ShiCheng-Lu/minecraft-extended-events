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
function getAllComponent(entity) {
    return [
        system.getComponent(entity, "minecraft:armor_container"),
        system.getComponent(entity, "minecraft:attack"),
        system.getComponent(entity, "minecraft:collision_box"),
        system.getComponent(entity, "minecraft:damage_sensor"),
        system.getComponent(entity, "minecraft:equipment"),
        system.getComponent(entity, "minecraft:equippable"),
        system.getComponent(entity, "minecraft:explode"),
        system.getComponent(entity, "minecraft:hand_container"),
        system.getComponent(entity, "minecraft:healable"),
        system.getComponent(entity, "minecraft:health"),
        system.getComponent(entity, "minecraft:hotbar_container"),
        system.getComponent(entity, "minecraft:interact"),
        system.getComponent(entity, "minecraft:inventory"),
        system.getComponent(entity, "minecraft:inventory_container"),
        system.getComponent(entity, "minecraft:lookat"),
        system.getComponent(entity, "minecraft:nameable"),
        system.getComponent(entity, "minecraft:position"),
        system.getComponent(entity, "minecraft:rotation"),
        system.getComponent(entity, "minecraft:shooter"),
        system.getComponent(entity, "minecraft:spawn_entity"),
        system.getComponent(entity, "minecraft:teleport"),
        system.getComponent(entity, "minecraft:tick_world")
    ];
}
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
                ...pos.data,
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
            return;
        }
        const playerName = playerData.data;
        const dataString = JSON.stringify(eventData).replace(/"/g, "'");
        system.executeCommand(`/execute "${playerName}" ~~~ summon data:json "${dataString}"`, () => { });
        system.executeCommand(`/say "${dataString}"`, () => { });
        server.log(`transmitted data: ${dataString}`);
    };
}
