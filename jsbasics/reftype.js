const array = ['suger','and','albatras'];

array.push('singer');


console.log(array);


// java script is some psycho language how tf am i changing the const lets play with this little bit 
// further

console.log(array[2]);


// const newArray = array.slice();



const newArray = [array];

console.log(newArray);


const notNewarray = [...newArray[0]];

console.log(notNewarray);



const getter = (a,b,c)=>{

    return [a,b,c];
    
}

console.log(getter(1,2,3));


console.log(getter(1,2,3,4));



const setter = (...args)=>{
    let total = 0;
    for(let v of args){
        total = total + v;
    }
    return total;

}

console.log(setter(1,2,3,4,));


