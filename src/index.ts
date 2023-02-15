//typescript infers types, if one does not anotate it
let sales = 131_001; //ts knows this variable will be a number
let tutorialName: string = "Typescript";
let isLearning: boolean = true;
let lvl; //infers the any Type - can hold any kind of datatype but should not be used
lvl = 1; //
lvl = "super"; // no errors
// sales = "string" raises an error

//! Arrays
// in JavaScript you can have arrays with mixed type
// e.g. let numbers = [1,2,"3"]

// let number: number[] = [1,2,"3"]
//raises an error in TS
let numbers: number[] = [1, 2, 3]; // compiler would infer the correct type -> let number = [1,2,3] would suffice
//arrays can have any type - should be avoided
for (const n of numbers) {
  const exponent = n.toString(); //now gives code completion for number specific functions
  console.log(exponent);
}

//! Tuples
//a user has an id. a name
let user: [number, string] = [1, "Martin Router King"];

//! Enums
enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}

// const enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// } - compiles to more optimized code

let mySize = Size.Medium;
console.log(mySize);

//! Functions
//                   Parameter Type   Function Returntype
function calculateTax(price: number): number {
  return price * 0.19;
}

console.log(calculateTax(10));

//! Objects

let employee: {
  readonly id: number; //readonly signals that this property should not be altered
  name: string;
  gender?: string; // questionmark signals this is an optional parameter
  retire: (date: Date) => void;
  //object should have a function that takes the argument date of type Date and returns nothing
} = {
  id: 1,
  name: "Bodo",
  retire: (date: Date) => {
    console.log(date);
  },
};

//! Type alias
//guarantee the same form of employee objects from a single source of truth
type Employee = {
  readonly id: number;
  name: string;
  gender?: string;
  retire: (date: Date) => void;
};

let gronkowski: Employee = {
  id: 69,
  name: "Robert",
  retire: (date: Date) => console.log(date, "never"),
};

//! Union Types
function kgToLbs(weight: number | string): number {
  const conversionRate = 2.2046;
  //Narrowing
  if (typeof weight === "number") {
    return weight * conversionRate;
  } else {
    return parseInt(weight) * conversionRate;
  }
}

console.log(kgToLbs(1));
console.log(kgToLbs("1"));

//! Intersection Types
type Resizable = {
  width: number;
  height: number;
  resize: () => void;
};
type Draggable = {
  drag: () => void;
};

//This is the intersection Type denoted by "&"
type UIwidget = Resizable & Draggable;

//Objects of the Type now need to implement all methods and attributes
let textBox: UIwidget = {
  width: 200,
  height: 350,
  resize: () => {},
  drag: () => {},
};

//! Literal Types
// constants?
//can only be their specific values
type Quantity = 50 | 100;

let einhundert: Quantity = 100;
let fuffzich: Quantity = 50;

//! Nullable Types
function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hello there");
  }
}

// greet(null);
// greet(undefined);  - don't work because they are not of type string needs the adding null and undefined as union types
