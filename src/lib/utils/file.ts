import { v4 as uuid } from "uuid";
import { Preferences } from "@capacitor/preferences";
import { jars as jarsState } from "../store";
import type { Jar, JarHistory } from "../types/Jar";

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

export async function createExpense({
  id,
  expense,
}: {
  id: Jar["id"];
  expense: JarHistory;
}) {
  const jars = await getJars();
  const value = jars.map((jar) => {
    if (jar.id !== id) {
      return jar;
    }

    return {
      id: jar.id,
      title: jar.title,
      amount: jar.amount - expense.amount,
      history: [expense, ...jar.history],
    };
  });

  Preferences.set({ key: KEY, value: JSON.stringify(value) });
  return jarsState.set(value);
}
