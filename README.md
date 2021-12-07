minecraft-extended-events
========================

this module adds additional events from old minecraft scripting to new gametest based scripting

adds player related events from minecraft scripting to gametest scripting

* This module is only tested on 1.18.0 stable release
* This module only works for windows 10
* This module depends on @types/mojang-minecraft@0.1.1

### Setup (Regolith)

`npm i minecraft-extended-events`

add this filter to regolith before compiling ts to js
`{ "url": "github.com/ShiCheng-Lu/Regolith-Filters/module_importer" }`

### Setup non-regolith 

--- not supported yet, you can just copy all the files into your project

### Usage

* `import * from "minecraft-extended-events"`
* this module extends `World, Events` and adds additional `EventSignals`
 
 ### Game options
 * Additional Moding Capabilities
 * Enable Gametest Framework



special thanks to [MajestikButter](https://github.com/MajestikButter) for inspiring data_json.json entity data transfer
