let number = prompt("Type a real number in here ya goblin.")
//We're asking for ONLY numbers here, but the prompt is giving us a string
let answer = number;
//Here, number is a string. We are storing this value inside of answer
let finalAnswer = Number(answer) + 5
//Take answer (which is a string) and turn it into a number using Number(), then add 5
alert(finalAnswer);