export interface JarHistory {
  date: number;
  amount: number;
}

export interface Jar {
  title: string;
  amount: number;
  history: JarHistory[];
}
