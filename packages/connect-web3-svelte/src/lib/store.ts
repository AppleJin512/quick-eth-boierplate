import { writable } from 'svelte/store';

export const opened = writable(true);
export function connect() {
  opened.set(true);
}