declare type EntityData = {
    type: "player" | "entity" | "item",
    data: string | {
        x: number,
        y: number,
        z: number,
        id: string,
    }
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
    type: "item",
    data: {
        name: string
        count: number
    }
} | undefined

declare type RawData = {
    type: "raw",
    data: any
} | undefined

declare type FieldData = {
    type: string,
    data: any
} | undefined

declare type EventData = {
    id: string,
    data: { [key: string]: FieldData }
}
