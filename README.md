minecraft-extended-events
========================

this module adds additional events from old minecraft scripting to new gametest based scripting

adds player related events from minecraft scripting to gametest scripting

`npm i minecraft-extended-events`

current working version with @types/mojang-minecraft@0.1.1

### add `scripts/server/minecraft-extended-events.js` to your behavour pack scripts.

* for javascript/typescript projects execute the following command\
`cp node_modules/minecraft-extended-events/scripts/server/minecraft-extended-events.js scripts/server`

* for typescript projects execute the following command\
`cp node_modules/minecraft-extended-events/src/server/minecraft-extended-events.ts src/server`\
or if your source codes are in a different folder\
`cp node_modules/minecraft-extended-events/src/server/minecraft-extended-events.ts [source-folder]/server`
or follow the same instructions as javascript and make sure the `scripts/server/minecraft-extended-events.js` exists when running your addon with Minecraft