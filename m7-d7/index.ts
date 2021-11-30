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
const x = 4;
// *************************************************************//
let arr: string[] = [val1, val4];

let arr2: (string | number | boolean)[] = ['lol', 2, false, 2, 'lol'];

let arr3: [string, number, boolean] = ['lol', 2, false]; //tuple fixed length and fixed type

// *************************************************************//
let obj: {
	name: string;
	age: number;
	education: {
		BS: string;
		MS: string;
	};
} = { name: 'A', age: 1, education: { BS: 'b', MS: 'c' } };

// *************************************************************//
function sum(a: number, b: number, x?: number) {
	return a + b;
}
console.log(sum(5, 9));
