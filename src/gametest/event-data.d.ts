declare type EntityData = {
    type: "player" | "entity" | "item",
    data: any
} | undefined

declare type BlockData = {
    type: "block",
    data: {
        x: number,
        y: number,
        z: number
    }
} | undefined

declare type ItemData = {
    type: "itemStack",
    data: any
} | undefined

declare type RawData = {
    type: "raw",
    data: any
} | undefined

declare type FieldData = EntityData | BlockData | ItemData | RawData;

declare type EventData = {
    id: string,
    data: { [key: string]: FieldData }
}
