export enum AnimalType {
  dog='dog',
  cat='cat',
  other='other',
}
export interface Animal {
  name: string;
  type: AnimalType;
  age: number;
  description: string;
}
