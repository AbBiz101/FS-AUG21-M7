let val1: string = 'string';

let val2: number = 4;

let val3: boolean = false;

let val4: string | number;
val4 = 20;
val4 = 'lol';

type stringOrNum = string | number;
let val5: stringOrNum;
val5 = 'lol';
val5 = 5;

// ****************************//
let arr: string[] = [val1, val4];

let arr2: (string | number | boolean)[] = ['lol', 2, false, 2, 'lol'];

let arr3: [string, number, boolean] = ['lol', 2, false];

// ****************************//
let obj = {};

// ****************************//
let sum = (a: number, b: number, c?: number) => a + b + c;
console.log(sum(5, 9));
console.log(sum(5, 5, 9));
