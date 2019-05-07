
// var a="helloworld";
// console.log(a);

// function b(){
//     console.log("calling a function");
// }
// b();
// during intialization var a and a function will be defined and during execution function and value will be assign like helloworld
// and console.log 
// var e;
// var a=10;
// var c=null;
// var d=false;
function printresult(num){
        
    if(num>=85)
        console.log("distinction");
   
    else if(num>=60) 
        console.log("firstclass");
    
    else if(num>=40) 
        console.log("secondclass");
    
    else
console.log("fail");
    
}

var num = prompt("enter the number");
printresult(num);