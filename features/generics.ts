class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: string): T {
    return this.collection[index];
  }
}

// <String> can be removed and type inference can detect the type pf parameters
const arr = new ArrayOfAnything<String>(["a", "b", "c"]);

function printStrings(arr: string[]) {
  for (const word of arr) {
    console.log(word);
  }
}

function printNumbers(arr: number[]) {
  for (const number of arr) {
    console.log(number);
  }
}

function printAnything<T>(arr: T[]): void {
  for (const item of arr) {
    console.log(item);
  }
}

printAnything<string>(["a", "b", "c"]);

class Car {
  print() {
    console.log("I am a car.");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (const item of arr) {
    item.print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
















