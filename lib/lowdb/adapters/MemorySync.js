/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/

class MemorySync {
    constructor() {
        this.data = null;
    }
    read() {
        return this.data || null;
    }
    write(obj) {
        this.data = obj;
    }
}
module.exports = { MemorySync };
