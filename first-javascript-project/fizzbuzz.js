/*var number = prompt("Whats the first number we should check");
if (number % 15 === 0) {
    document.write("Fizz Buzz");
} else if (number % 3 === 0) {
    document.write("Fizz");
} else if (number % 5 === 0) {
 document.write("Buzz");
} else {
            document.write(number)
} */


/*let userName = prompt("What is your Name?");
if (userName.length  % 2 == 0) {
document.write("Even") 
} else { 
    document.write("Odd") 



}*/

// && - And
// || - Or
// ! - not equal
/*

if (name === "Thadeus" && age === 39) {
    console.log ("That's correct")
}

if (name != "Thadeus" || age != 39) {
    console.log ("That's incorrect")
}
*/

//Make a program that takes a number from 1-100
//If the number is less than 25 say less than 25
//If the number is between 25 and 50 say between 25 and 50
//If the number is between 50 and 75 say number is between 50 and 75
//If the number is between 75 and 100 say number is between 75 and 100


/*let number = pompt("Whats your number");

if (number < 25); {
    document.write ("say number is < 25");
}

if(number >= 50 && number <= 75); {
    document.write ("say number is between 50 && 75");
 }

 if (number >= 25 && number <= 50); {
    document.write ("say number is between 25 && 50");
}

 if (number >= 75 && number <= 100); {
    document.write ("say number is between 75 && 100");
not quite right 
}*/

/*const userInput = parseInt (prompt ( "Please input a number between 1-25"))
if(userInput < 25){
    console.log("lest than 25")
}
else if (userInput >= 25 && userInput < 50){
    console.log("more than 25 less than 50")
}
else if (userInput >= 50 && userInput < 75){
    console.log("more than 50 less than 75")
} else {
    console.log("more than 75 less than 100")
}
*/
//Make a program that takes a user first name and last
//Write the combined first and last name to the page

/*
let firstName = prompt ("what is your firstname");
let lastName = prompt("what is your last name")
document.write(firstName =  " " +lastName);*/

//Figure out how to generate a random number in Javascript
//Let the user guess a number between 1-10
//Tell them if they got the right number :)


/*
var random = parseInt(Math.random() * 10 );
const userInput = parseInt (prompt ( "Please input a number between 1-10"))
if(userInput < 8){
    document.write("wrong")
}
else if (userInput === 8) {
    document.write("correct")
}
else if (userInput > 8) {
    document.write("wrong"); 

}

var random = parseInt(Math.random() * 10 );
let input = input = parseInt (prompt ( "Please input a number between 1-10"))
*/

//Loops
//While Loop - A while loop is a loop that runs as long as a condition is true

/*let skyIsBlue = true 
    
while (skyIsBlue === true) {
    //exit condition: that that ends the loop
    console.log("it's true")
}
if (conuter === 5);{
skyIsBlue = false
}
counter++
*/

//let userName = prompt ("What is your name?")
//while(userName != "Thadeus"){
  //  alert("Please input the name Thadeus");
    //userName = prompt("What is your name?");
//}
//Make a guessing game again but it runs until the user guesses correctly

var random = parseInt(Math.random() * 10);
let input = parseInt(prompt("Guess a number 1-10"));
if(random === input){
    document.write("You got it right")

} else {
    document.write("You got it wrong")

}
while (8 === right);

let userGuess = parseInt(prompt("What is your guess?"));
let randomNumber = parseInt(Math.random * 10);

while(userGuess != randomNumber) {
    alert("guess again")
    userGuess = parseInt(prompt("Whats your guess?"));
}
        alert("You got it right!")
