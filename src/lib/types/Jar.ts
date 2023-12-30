export interface JarHistory {
  date: number;
  amount: number;
}

export interface Jar {
  id: string;
  title: string;
  amount: number;
  history: JarHistory[];
}
