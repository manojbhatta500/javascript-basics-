// type diffrence between diffrent type of assigning var 

let result;
let book = 'the great gatsby.';
const reader = 'manoj';

function theBookReader(reader,bookname){
    return reader +' Loves to reader '+ bookname;
}


result = theBookReader(reader,book);
console.log(result);


book = 'Atomic Habits';

result = theBookReader(reader,book);
console.log(result);





book = '1984 by Gorge orwell.';

result = theBookReader(reader,book);
console.log(result);



book = 'Notes from the UnderGround';

result = theBookReader(reader,book);
console.log(result);





// as we can see that let and var is same and const is const just like dart
