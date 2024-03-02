var mename = 'manoj';
var age = 25;

var lovesfootball = true;


function checkUser (userName,userAge,Userfoot){

    console.log('userName'+ userName);

    console.log('userAge'+ userAge);

    console.log('loves Football'+ Userfoot);

    return 'UserName '+ userName + ' userAge' + userAge + ' loves Football '+ Userfoot;

}


console.log(checkUser(mename,age,lovesfootball));

