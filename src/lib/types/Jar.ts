export interface JarHistory {
  date: Date;
  amount: number;
}

export interface Jar {
  title: string;
  amount: number;
  history: JarHistory[];
}