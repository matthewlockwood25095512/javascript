


const pinNumber = 1234
let availableBalance = 100

const withdrawCash = (requestedAmount, pinNumberEntered) => {
    if (pinNumberEntered != pinNumber) {
        console.log("incorrect pin")}
    else if ((availableBalance >= requestedAmount) && pinNumberEntered == pinNumber){
        console.log (`You have requested ${requestedAmount} Here are 
        your funds, ${availableBalance-requestedAmount} remaining`)
        availableBalance -= requestedAmount;
    }
    else {
        console.log ("You do not have sufficient funds or incorrect pin")
    }
}

withdrawCash (5, 1234)
withdrawCash (3, 1234)

/*
let pin = 1234

const withdrawcash = (pinNumberEntered) => {
    return pin == pinNumberEntered;
};
const correctDetails = () => {
    if withdrawcash =true;
    console.log("Correct");
}





const pinNumber = 1234;
let availableBalance = 100;

const checkBalance = (requestedAmount)=>{
    availableBalance -= requestedAmount;
    return availableBalance;
}

const takeCashOut = (requestedAmount) => {
    if (availableBalance >= requestedAmount){
        console.log (`You have requested £${requestedAmount}. 
        Here are your funds, £${checkBalance(requestedAmount)} remaining.`);
    }
    else {
        console.log ("You do not have sufficient funds.")
    }
}
const cashMachine = (pinNumberEntered, requestedAmount) => {
    if (pinNumberEntered == pinNumber) {
        takeCashOut(requestedAmount);
    }
    else{
        console.log("Incorrect pin!");
    }
}

cashMachine(1234, 5);
cashMachine(1235, 3);
*/