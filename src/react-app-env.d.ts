/// <reference types="react-scripts" />
import { compose } from 'redux';

declare module '*.png' {
    const value: string;
    export = value;
}

declare module 'uuid-base64' {
    export function encode(guid: Guid): string;
    export function decode(base64: string): Guid;
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        ym?: (...params) => void;
    }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
window.ym = window.ym || undefined;
