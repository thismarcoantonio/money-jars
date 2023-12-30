import { writable } from "svelte/store";
import type { Jar } from "../types/Jar";

export const jars = writable<Jar[]>([]);
