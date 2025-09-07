// JavaScript print the statement line by line...
// data type = String, Number,Boolean (Three Main DataType)

console.log(1)
console.log("Jiren")
console.log(true)


// Three types of Variable you can create...
// const, let, var
// Once variable created using const, it can't be change again, let is opposite to const

const a = 20;
let b = "Jiren"
console.log(b)
b = "Goku";
console.log(b)
var c = true;


const d = 20;
const e = 30;
const add = d +e;
const multi = d*e
const divide = d/e
const sub = d-e;

console.log(add)
console.log(multi)
console.log(divide)
console.log(sub)

let firstName = 'Jiren';
let lastName = 'Great';
let fullName = firstName + " " +  lastName;
console.log(fullName);

let letter = "Jiren"
let number = 20; // converts the number to String
// let add = letter + " " + number
console.log(add);

let arr = [1,2,3, "Jiren",true,[1,3,4]] // any data types can be stored.. and nested array can be also stored..
console.log(arr)
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[5][0])
let num = [1,3,[1,3,4,[1,2,3]]]
console.log(num)
console.log(num[2])
console.log(num[2][2])
console.log(num[2][3][2])

// objects (objects basically Contains Key-Value Pair....)

let obj = {
    name: "Goku",
    age: 42,
    Character: "Warrior",
    arr: [1,2,3,4,5,[1,2,[1,2]]]
}

console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.Character)
console.log(obj.arr)
console.log(obj.arr[5])
console.log(obj.arr[5][2][1])
