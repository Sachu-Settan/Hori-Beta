/*
 * You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
 * Licenced Under MIT License
 * Copyright © 2022 Sachu. Hori Mwol-MD
 */
module.exports = {
    ...require('./adapters/JSONFile.js'),
    ...require('./adapters/JSONFileSync.js'),
    ...require('./adapters/LocalStorage.js'),
    ...require('./adapters/Memory.js'),
    ...require('./adapters/MemorySync.js'),
    ...require('./adapters/TextFile.js'),
    ...require('./adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}