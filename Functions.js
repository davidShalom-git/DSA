// functions are specific task that can be called again and again......
//- If a function uses return, and you want to see the returned value, then yes — you need to call it using console.log() or store the result in a variable.
// - If a function doesn't use return, but instead logs something internally, then you can just call it directly — no need for console.log().

function add(a,b){
    return a+b;
    console.log("Added!");
}

console.log(add(5,3));

function name(name){
    console.log("Hello", name)
}

let a = 'Broly'
name(a);



// function without parameter and with return type, that can be called with console.log
function age(){
    let age = 5;
    return age;
}

console.log(age())

// function with parameter and with return type, that can be called with console.log
function Character(a,b){
    return a*b;
}

console.log(Character(2,3))

function Warrior(){
    console.log('Warrior') // function without parameter and without return type that can be called directly
}

Warrior();

function Universe(Universe){
    console.log(Universe) // function with parameter and without return type that can be called directly
}

Universe("7")

// square of the Function

function Square(a){
    let form = a*a;
    let x = "Square of " + a + " = " +  form;
    return x;

}

console.log(Square(5))

// If-Else

// Vote Eligible

function Voting(age){
    if(age>=18){
        console.log("Your age is " + age + " " + "Your Eligible to Vote..");
    }
    else if (age<0){
        console.log("Your age is less than 0");
    }
    else {
        console.log("Not Eligible.....")
    }

}
Voting(-2)


function num(num){
    if(num % 2==0){
        console.log("Your number is " + num + " It is Even");
    }
    else{
        console.log("Your number is " + num + " " + " It is Odd " );
    }
}

num(9   )


