/// <reference types="minecraft-scripting-types-server"/>
/// <reference types="../gametest/event-data"/>

// register client system
const system = server.registerSystem(0, 0);

system.initialize = function() {
    system.listenForEvent(ReceiveFromMinecraftServer.BlockDestructionStarted, createEventHandler("player"));
    system.listenForEvent(ReceiveFromMinecraftServer.BlockDestructionStopped, createEventHandler("player"));
    system.listenForEvent(ReceiveFromMinecraftServer.BlockInteractedWith, createEventHandler("player"));
    system.listenForEvent(ReceiveFromMinecraftServer.EntityAcquiredItem, createEventHandler("entity"));
    system.listenForEvent(ReceiveFromMinecraftServer.EntityCarriedItemChanged, createEventHandler("entity"));
    // system.listenForEvent(ReceiveFromMinecraftServer.EntityCreated, raiseEvent);
    system.listenForEvent(ReceiveFromMinecraftServer.EntityDeath, createEventHandler("entity"));

    system.listenForEvent(ReceiveFromMinecraftServer.EntityDroppedItem, createEventHandler("entity"));
    system.listenForEvent(ReceiveFromMinecraftServer.EntityEquippedArmor, createEventHandler("entity"));
    system.listenForEvent(ReceiveFromMinecraftServer.EntityStartRiding, createEventHandler("entity"));
    system.listenForEvent(ReceiveFromMinecraftServer.EntityStopRiding, createEventHandler("entity"));
    // system.listenForEvent(ReceiveFromMinecraftServer.EntityTick, raiseEvent);
    system.listenForEvent(ReceiveFromMinecraftServer.EntityUseItem, createEventHandler("entity"));
    // system.listenForEvent(ReceiveFromMinecraftServer.PistonMovedBlock, raiseEvent);
    // system.listenForEvent(ReceiveFromMinecraftServer.PlaySound, raiseEvent);
    system.listenForEvent(ReceiveFromMinecraftServer.PlayerAttackedEntity, createEventHandler("player"));
    system.listenForEvent(ReceiveFromMinecraftServer.PlayerDestroyedBlock, createEventHandler("player"));
    system.listenForEvent(ReceiveFromMinecraftServer.PlayerPlacedBlock, createEventHandler("player"));
    // system.listenForEvent(ReceiveFromMinecraftServer.WeatherChanged, raiseEvent);
};

function getAllComponent(entity: IEntity): any[] {
    return [
        system.getComponent(entity, MinecraftComponent.ArmorContainer),
        system.getComponent(entity, MinecraftComponent.Attack),
        system.getComponent(entity, MinecraftComponent.CollisionBox),
        system.getComponent(entity, MinecraftComponent.DamageSensor),
        system.getComponent(entity, MinecraftComponent.Equipment),
        system.getComponent(entity, MinecraftComponent.Equippable),
        system.getComponent(entity, MinecraftComponent.Explode),
        system.getComponent(entity, MinecraftComponent.HandContainer),
        system.getComponent(entity, MinecraftComponent.Healable),
        system.getComponent(entity, MinecraftComponent.Health),
        system.getComponent(entity, MinecraftComponent.HotbarContainer),
        system.getComponent(entity, MinecraftComponent.Interact),
        system.getComponent(entity, MinecraftComponent.Inventory),
        system.getComponent(entity, MinecraftComponent.InventoryContainer),
        system.getComponent(entity, MinecraftComponent.LookAt),
        system.getComponent(entity, MinecraftComponent.Nameable),
        system.getComponent(entity, MinecraftComponent.Position),
        system.getComponent(entity, MinecraftComponent.Rotation),
        system.getComponent(entity, MinecraftComponent.Shooter),
        system.getComponent(entity, MinecraftComponent.SpawnEntity),
        system.getComponent(entity, MinecraftComponent.Teleport),
        system.getComponent(entity, MinecraftComponent.TickWorld)
    ]
}

function parseEntity(data: IEntity): EntityData {
    if (data.__identifier__ === "minecraft:player") {
        // player, can just be targeted by name
        const name = system.getComponent(data, MinecraftComponent.Nameable);
        if (name === null) {
            return;
        }
        return {
            type: "player",
            data: name.data.name,
        }
    } else {
        // regular entity
        const pos = system.getComponent(data, MinecraftComponent.Position);
        if (pos === null) {
            return;
        }
        return {
            type: "entity",
            data: {
                id: data.__identifier__,
                pos: pos.data,
            },
        }
    }
}

function parseItemEntity(data: IEntity): EntityData {
    const name = system.getComponent(data, MinecraftComponent.Nameable);
    if (name === null) {
        return;
    }
    return {
        type: "item",
        data: {
            name: name.data.name
        }
    }
}

function parseItemStack(data: IItemStack): ItemData {
    return {
        type: "itemStack",
        data: {
            name: data.item,
            count: data.count,
        }
    }
}

/**
 * convert scripting event into usable data for gametest
 * @param data an property on a scripting event
 */
function parseProperty(data: any): FieldData {
    if (data.__type__ === "entity") {
        return parseEntity(data);
    } else if (data.__type__ === "item_stack") {
        return parseItemStack(data);
    } else if (data.__type__ === "item_entity") {
        return parseItemEntity(data);

    } else if (data.x !== undefined && data.y !== undefined && data.z !== undefined) {
        return {
            type: "block",
            data: data,
        };
    } else {
        return {
            type: "raw",
            data: data
        }
    }
}

function createEventHandler(playerKey: string) {
    return function(data: any) {
        // if the event does not involve a player, then it's hard to acurately transmite the data
        if (data.data[playerKey].__identifier__ !== "minecraft:player") {
            return;
        }

        const eventData: EventData = {
            id: data.__identifier__,
            data: {}
        }

        for (let property in data.data) {
            const propData = parseProperty(data.data[property]);
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
    }
}
