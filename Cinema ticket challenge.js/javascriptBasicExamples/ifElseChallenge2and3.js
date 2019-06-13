
let num = "15"

if (num % 3 == 0 && num % 5 == 0) {
    console.log("This is divisible by 3 and 5");
}
else {
    console.log("Not divisible by 3 and 5")
}



if (num % 3 == 0 && num % 5 == 0) {
    console.log("divisible by BOTH 3 and 5 ")
        }
    else if (num %3 == 0){
        console.log("divisible by 3")
        }
    else {
    console.log("divisible by 5")
}

//This challenge asks for a command that asks if a numbert is divisible by 3, 5 and both also
// the % symbol means that it is divisible by that number and = 0 means the result is zero
// The if statement that is first checking multiple results needs to be first as otherwise
// it would find a result cascading down the rules and stop at that.


