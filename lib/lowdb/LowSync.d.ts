/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/

export interface SyncAdapter<T> {
    read: () => T | null;
    write: (data: T) => void;
}
export declare class LowSync<T = unknown> {
    adapter: SyncAdapter<T>;
    data: T | null;
    constructor(adapter: SyncAdapter<T>);
    read(): void;
    write(): void;
}
