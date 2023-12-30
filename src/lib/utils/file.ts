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

export async function addAmount({
  id,
  amount,
}: {
  id: Jar["id"];
  amount: Jar["amount"];
}) {
  const jars = await getJars();
  const value = jars.map((jar) => {
    if (jar.id !== id) {
      return jar;
    }

    return {
      id: jar.id,
      title: jar.title,
      amount: jar.amount + amount,
      history: [
        {
          date: new Date().getTime(),
          amount: amount,
          description: "Add amount",
        },
        ...jar.history,
      ],
    };
  });

  Preferences.set({ key: KEY, value: JSON.stringify(value) });
  return jarsState.set(value);
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
      history: [{ ...expense, amount: -expense.amount }, ...jar.history],
    };
  });

  Preferences.set({ key: KEY, value: JSON.stringify(value) });
  return jarsState.set(value);
}
