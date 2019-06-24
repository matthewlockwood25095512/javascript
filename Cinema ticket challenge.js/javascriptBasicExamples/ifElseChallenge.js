
let rem, temp, final = 1001
let number = Number (document.getElementById("N").value);
temp = number

function palindrome() {
while(number>0) {
        rem = number %10;
        number = parseInt(number/10);
        final = final*10+rem;
}
if (final==temp){
    console.log("Palindrome")
}
else {
    console.log("Not")
}