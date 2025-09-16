// Concept to be remember..

// 1. Last digit => n%10 => reminder
// 2. remove last => n/10 => quotient

let n = 121
let ncopy = n
function Palindrome(n,x){
    let rev = 0;
    while(n>0){
       let rem = n%10;
       rev = (10*rev) + rem;
       n = Math.floor(n/10);
    }
    if(rev === x){
        return true;
    }
    else
    {
        return false
    }
}

console.log(Palindrome(n,ncopy))

