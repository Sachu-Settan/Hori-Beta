/*
* You Can Recode, Reupload or Copy The Codes/Scripts With Credits To Code Owners ( Sachu-Settan )
* Licenced Under MIT License
* Copyright © 2022 Sachu. Rose Mwol-MD
*/

export interface Adapter<T> {
    read: () => Promise<T | null>;
    write: (data: T) => Promise<void>;
}
export declare class Low<T = unknown> {
    adapter: Adapter<T>;
    data: T | null;
    constructor(adapter: Adapter<T>);
    read(): Promise<void>;
    write(): Promise<void>;
}
