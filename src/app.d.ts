// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface NavLink {
            title: string;
            url: string;
            sublinks?: App.NavLink[];
        }
        declare module '*.svx';
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
