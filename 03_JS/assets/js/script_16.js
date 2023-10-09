// object literal
let student = {
    id: 1 ,
    name: "Dasun",
    age: 21,
    institute: "IJSE"
}

console.log(student);
console.log(student.id);
console.log(student.name);
console.log(student.age);
console.log(student.institute);

student.name = "Madawa";

console.log(student);

// constructor functions
// function myFunction(){
//
// }

function Employee(id , name , age){
    this.id = id;
    this.name = name;
    this.age = age;

}

let employee = new Employee("S01" , "Dasun" , 21 );

console.log(employee.id);
console.log(employee.name);
console.log(employee.age);

class Person {
    constructor(id , name , age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

}

let person = new Person("S02" , "Madawa" , 21);

console.log(person);
console.log(person.id);

