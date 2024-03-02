const { clear } = require('console');
const fs = require('fs');
const takeInputFromFile = fs.readFileSync('./texts/sample.txt','utf-8');

console.log(takeInputFromFile);


// now i will write to file
const  myInp = 'i am manoj and i will complete the promise i made on sample.txt file because i know i can do it and i will  ';

fs.writeFileSync('./texts/promise.txt',myInp);
console.log('written successfully ');

// this will have to work i wiil try 


// it worked now i will try to use other 

