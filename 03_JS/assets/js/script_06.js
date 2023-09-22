// arrow function

const myFunction1 = (para1 , para2 , para3 ) => {
    console.log(para1);
    console.log(para2);
    console.log(para3);
}

// myFunction1("1","2" );


const myFunction2 = (name , program) => {
    console.log(`Hello! ${name}. Welcome to ${program} at IJSE`);
    console.log("Hello! " + name + ". Welcome to " + program +" at IJSE");
}

// myFunction2("Isanka" ,"GDSE");


const myFunction3 = new Function('arg1' , 'arg2' , 'return (arg1+arg2)' );

// console.log(myFunction3(1 ,2));

// (function() {
//     console.log("Hello !!!")
// })();

function f1(){
    console.log("IJSE");

}

function f2(){
    console.log("GDSE")

}

function f3(arg1){
    arg1();

}

f3(f1);
f3(f2);
f3(f2);

