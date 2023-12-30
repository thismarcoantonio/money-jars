import { v4 as uuid } from "uuid";
import { Preferences } from "@capacitor/preferences";
import { jars as jarsState } from "../store";
import type { Jar } from "../types/Jar";

const KEY = "jars";

export async function getJars(): Promise<Jar[]> {
  const { value } = await Preferences.get({ key: KEY });
  return JSON.parse(value ?? "[]");
}

export async function createJar(jar: Omit<Jar, "id">) {
  const jars = await getJars();
  const value = [...jars, { ...jar, id: uuid() }];

  Preferences.set({ key: KEY, value: JSON.stringify(value) });
  return jarsState.set(value);
}

export async function editJar(jar: Jar) {
  const jars = await getJars();
  const jarIndex = jars.findIndex((currentJar) => currentJar.id === jar.id);

  const value = JSON.stringify([
    ...jars.slice(0, jarIndex),
    jar,
    ...jars.slice(jarIndex + 1),
  ]);
  return Preferences.set({ key: KEY, value });
}
