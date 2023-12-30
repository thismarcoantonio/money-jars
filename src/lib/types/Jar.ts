export interface JarHistory {
  date: number;
  amount: number;
  description?: string;
}

export interface Jar {
  id: string;
  title: string;
  amount: number;
  history: JarHistory[];
}
