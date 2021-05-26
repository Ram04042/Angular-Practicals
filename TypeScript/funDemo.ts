export{}
function Message(n:string)
{
    console.log("Hello "+n);
}

Message("Ram");


function greeting():string
{
    return "Hello World";
}
console.log(greeting());

function display(n:string):string
{
    return "Hello "+n;
}
console.log(display("Sunil"));

//Anonymous Fn
let sum = function(x:number,y:number)
{
    return x+y;
}
console.log(sum(2,3));

//Arrow Fn
let sum2 = (x:number,y:number):number=>
{
    return x+y;
}
console.log(sum2(2,3));

let display2=()=>{return "Hello";};
console.log(display2());


//Default Parameters
function Multiply(a:number,b:number=10)
{
    return a*b;
}
console.log(Multiply(5));

//Optional Parameters
function printdata(id:number,email?:string)
{
    console.log("Id: "+id);
    if(email!=undefined)
    console.log("Email: "+email);
    
}
printdata(1,"Ram");
printdata(2);


