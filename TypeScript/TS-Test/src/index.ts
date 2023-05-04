let x: number;
let y: string;
let z: boolean;
let arr: string[] = [];
let t: any;

let cm: string | number;

cm = 'asdf';
cm = 123;

function logName(name: string, age?: number): void {
  console.log(name);
}

logName('Matt');
logName('Matt', 20);

type Person = {
  readonly id: number;
  name: string;
  tel?: number;
  sayHello: (name: string) => void;
};

const person: Person = {
  id: 1,
  name: 'Matt',
  sayHello: (name) => {
    console.log(`hello ${name}`);
  },
};

const b = 316_813_516_8;

function mToCm(value: number | string): number {
  if (typeof value === 'string') {
    return +value * 100;
  } else {
    return value * 100;
  }
}
