// i will use functions and see the similaraties between dart and javascript

function addTwoNumbers(a,b){
    return a + b;
}

const obj1 = addTwoNumbers(5,5);

console.log(obj1);

// arrow func

let obj2 = (a,b)=>{
    return a + b;
}


console.log(obj2(5,6));

// lets see how far we can short this until i get the error



 obj3 = (a,b)=>{
    return a + b;
}


console.log(obj3(50,50));

// lets sort this again kind of similar to dart but feels kinda weak

obj4 = (a,b)=> a+b;

console.log(obj4(20,20))


// lets use it without parameters 


obj5 = short => 55 ;


// damn feels too much power  how much can i short this 


// lets do something cool

obj5 = hundred => hundred ;

console.log(obj5(100));


