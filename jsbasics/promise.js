function a(){
    console.log('hello from a');
    b();


}


function b(){
    console.log('hello from b');
    a();
    }


a();    