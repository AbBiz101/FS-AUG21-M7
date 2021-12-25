/** * @format*/

/*--------------------------------------------Homework--------------------------------------------------------*/

/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.*/

function sum(x, y) {
	if (x === y) {
		console.log(x * 3);
	} else {
		console.log(x + y);
	}
}
sum(2, 2);
sum(2, 3);

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50.
 */
function numcheck(x, y) {
	if (typeof x == 'number' && typeof y == 'number') {
		if (x === 50 || y === 50 || x + y === 50) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
}
numcheck(10, 15);
numcheck(15, 50);

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function remove(num, str) {
	console.log(str.slice(0, num) + str.slice(num + 1));
}

remove(2, 'abcg');

/* 4. Create a function to find and return the largest of three given integers. */
function largest(x, y, z) {
	largnum = 0;
	if (x > y) {
		largnum = x;
	} else {
		largnum = y;
	}
	if (largnum < z) {
		largnum = z;
	}
	console.log(largnum);
}
largest(2, 5, 6);

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function range(x, y) {
	if (x <= 60 && x >= 40 && y <= 60 && y >= 40) {
		console.log(true);
	} else if (x <= 100 && x >= 70 && y <= 100 && y >= 70) {
		console.log(true);
	} else {
		console.log(false);
	}
}

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
function copy(str, num) {
	for (let i = 0; i < num; i++) {
		console.log(str);
	}
}
copy('hello', 5);

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
function cityname(str) {
	let x = str.toLowerCase();
	if (x.startsWith('los')) {
		console.log('Los Angeles');
	} else if (x.startsWith('new')) {
		console.log('New York');
	} else {
		console.log('No Name');
	}
}
cityname('cal');
cityname('los');

// /* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
//     Pass the array as a parameter. */
function sums(array) {
	let sumofarray;
	if (array.length === 3) {
		sumofarray = array.reduce((total, current) => total + current, 0);
		console.log(sumofarray);
	} else {
		console.log('The array lenght is not 3');
	}
}
sums([10, 1, 2]);

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` is it does, `false` if it doesn't. */

function test(val) {
	if (val.includes(1) || val.includes(3)) {
		console.log(true);
	} else {
		console.log(false);
	}
}
test([25, 1]);
test([25, 78]);

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
     Return `true` if it doesn't, `false` if it does. */
function test(val) {
	if (val.includes(1) || val.includes(3)) {
		console.log(false);
	} else {
		console.log(true);
	}
}
test([25, 1]);
test([25, 78]);

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
function longest(array) {
	let text = '';
	let longval = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i].length > longval) {
			longval = array[i].length;
			text = array[i];
		}
	}
	console.log(longval);
	console.log(text);
}
longest(['a', 'function', 'to', 'find', 'and', 'return', 'the', 'index']);

/* 12. Create a function to find the types of a given angle:
   1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
     3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
     4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

function angletype(angle) {
	if (angle < 90) {
		console.log('acute');
	} else if (angle == 90) {
		console.log('right');
	} else if (angle > 90 && angle < 180) {
		console.log('obtuse');
	} else if (angle == 180) {
		console.log('straight');
	}
}

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
let x = [12, 5, 4, 8, 95, 6, 40, 55];
function index(num) {
	let val = num.indexOf(Math.max(...num));
	console.log(val);
}
index(x);

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
let x = [12, 5, 4, 8, 95, 60, 4, 52];
maxeven(x);
function maxeven(arra) {
	let even = [];
	for (var i = 0; i < arra.length; i++) {
		if (arra[i] % 2 == 0) even.push(arra[i]);
	}
	console.log(Math.max(...even));
}

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
     Return `true` if that's the case, return `false` if it's not. */
function posneg(x, y) {
	if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
		console.log(true);
	} else {
		console.log(false);
	}
}
posneg(-5, 6);

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
     If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

function capital(str) {
	if (str.length < 3) {
		str.toUpperCase();
	} else {
		console.log(str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase());
	}
}
capital('toLowerCase');

/* 17. Create a function to calculate the sum of two integers (passed as parameters).
     If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

function sum(x, y) {
	x + y > 50 && x + y < 80 ? console.log(65) : console.log(80);
}
sum(10 + 10);
sum(10 + 50);

// /* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
//     The number has 3 as a factor â‡’ return `Diego`
//     The number has 5 as a factor â‡’ return `Riccardo`
//     The number has 7 as a factor â‡’ return `Stefano`
//     If the number does not have 3,5, or 7, return the original number.
//     âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names.
// Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
function factor(num) {
	if (num % 3 === 0) {
		console.log('Diego');
	} else if (num % 5 === 0) {
		console.log('Riccardo');
	} else if (num % 7 === 0) {
		console.log('Stefano');
	} else {
		console.log(num);
	}
}
factor(15);

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
function acronym(str) {
	let x = str.split(' ');
	let acr = [];
	console.log(x);
	for (let i of x) {
		for (let j of i[0]) {
			acr.push(j[0]);
		}
	}
	console.log(acr.join(''));
}
acronym('British Broadcasting Corporation');

/*--------------------------------------------Homework ADV--------------------------------------------------------*/

/* 1. Given a string (as a parameter), return the character that is most commonly used. */
function common(str) {
	let char = ' ';
	let max = 0;
	let all = {};
	for (let i of str) {
		all[i] = all[i] + 1 || 1;
	}
	for (let i in all) {
		if (all[i] > max) {
			max = all[i];
			char = i;
		}
	}
	console.log(`${char} times ${max}`);
}
common('assaxxccaaaavcrgthsasas');

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */
function anagrams(text, text1) {
	let a = text.toLowerCase().replace(/\s/g, '').split('').sort();
	let b = text1.toLowerCase().replace(/\s/g, '').split('').sort();

	if (a.length == b.length) {
		for (let i of a) {
			if (a[i] === b[i]) {
				console.log(true);
				break;
			} else {
				console.log(false);
				break;
			}
		}
	} else {
		console.log(false);
	}
}
anagrams('maracfy', 'aarfmsc');

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

function palindrome(text) {
	let a = text.toLowerCase().replace(/[\W_]/g, '');
	let b = a.split('').reverse().join('');
	if (a === b) {
		console.log(true);
	} else {
		console.log(false);
	}
}
palindrome('Madam');

/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 
*/
function reversed(num) {
	console.log(num.toString().split('').reverse().join(''));
}
reversed(123);

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped 
string with X level usign the `#` character. Make sure the steps are on the right hand side:
	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/
function tree(x) {
	for (let i = 1; i <= x; i++) {
		console.log(`${i} string`);
		for (let j = 0; j <= i; j++) {
			let star = '#'.repeat(j);
			console.log(star);
		}
	}
}
tree(5);

/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */
function stringreversed(str) {
	console.log(str.split('').reverse().join(''));
}
stringreversed('abcd');

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/

/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3
```
 '  #  '
 ' ### '
 '#####'
```
*/
function tree1(x) {
	for (let i = 0; i <= x; i++) {
		let star = '#'.repeat(2 * i + 1);
		let spaceing = ' '.repeat(x - i - 1);
		console.log(spaceing + star);
	}
}
tree1(4);

/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 
N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]
*/
