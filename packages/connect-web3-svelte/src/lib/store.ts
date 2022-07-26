import { writable } from 'svelte/store';

export const opened = writable(false);
export function connect() {
  opened.set(true);
}
