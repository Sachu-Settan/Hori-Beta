/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/

class Memory {
    constructor() {
        this.data = null;
    }
    read() {
        return Promise.resolve(this.data);
    }
    write(obj) {
        this.data = obj;
        return Promise.resolve();
    }
}
module.exports = { Memory };
