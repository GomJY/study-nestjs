export class Animal {
  public name: string;
  public type: string;

  constructor({ name, type }) {
    this.name = name;
    this.type = type;
  }

  isSameName(animal: Animal) {
    return animal.name === this.name;
  }

  getSaveType() {
    return {
      name: this.name,
      type: this.type,
    };
  }
}
