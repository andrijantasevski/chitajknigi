
import { writable } from "svelte/store";

export const booksStore = writable([])
export const bookDuplicateStore = writable('')
export const booksRead = writable([]);
