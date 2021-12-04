minecraft-extended-events
========================

this module adds additional events from old minecraft scripting to new gametest based scripting

adds player related events from minecraft scripting to gametest scripting

`npm i minecraft-extended-events`

current working version with @types/mojang-minecraft@0.1.1

### add the data transfer entity to your behaviour pack entities folder.
* `cp node_modules/minecraft-extended-events/entities/data_json.json entities`

### add the event created from old minecraft scripting to your behaviour pack scripts.

* run execute the following command\
`cp node_modules/minecraft-extended-events/scripts/server/minecraft-extended-events.js scripts/server`\
make sure this file is not overwritten or deleted

### usage

* `import { World } from "minecraft-extended-events"` to use `World.events.[event].subscribe()` to listen for additional scripting events
* `import { Events } from "minecraft-extended-events"` for extended event definitions (also includes vanilla events)
