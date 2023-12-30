export interface JarHistory {
  date: number;
  amount: number;
}

export interface Jar {
  id: number;
  title: string;
  amount: number;
  history: JarHistory[];
}
