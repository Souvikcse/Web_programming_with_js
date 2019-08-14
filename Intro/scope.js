let str='This is a string';

console.log(str.slice(-6, -4));       //start counting from 0 in backward direction

console.log(str.split(" ")[3]);
console.log(str.substr(0, 3));

let arr=[2, 3, 'Hello'];
console.log(arr.splice(1, 1));
console.log(arr);
console.log(arr.splice(0, 1, 'Hi'));
console.log(arr)