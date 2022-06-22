/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/
class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    read() {
        const value = localStorage.getItem(this.key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    write(obj) {
        localStorage.setItem(this.key, JSON.stringify(obj));
    }
}
module.exports = { LocalStorage };
