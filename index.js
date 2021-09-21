var readlineSync = require("readline-sync");


function knowMeBetter(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase())
  {
    console.log("You are correct!")
    score = score + 1;
  }
  else{
    console.log("You are wrong!")
  }
  console.log("current Score : ", score)

}

// questions 
questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Ironman"
}

questionTwo = {
  question: "What is my favourite color? ",
  answer: "Black"
}

questionThree = {
  question: "What is my favourite programming language? ",
  answer: "Javascript"
}

questionFour = {
  question: "What is my favourite sports? ",
  answer: "Cricket"
}

questionFive = {
  question: "What is my favourite dish? ",
  answer: "Pani Puri"
}


// main

console.log("Welcome to How Good You Know Krushna!\n")
console.log("This is a simple quiz. You have to answer five questions about me to check how  well do you know me.\n")

var userName = readlineSync.question("Enter your name: ")
var score = 0;
var questionList = [questionOne,questionTwo,questionThree,questionFour,questionFive];
var n = questionList.length;

for(var i =0; i < n; i++)
{
  var currentQuestion = questionList[i];
  knowMeBetter(currentQuestion.question, currentQuestion.answer);
}
 console.log("----------------------");
  console.log("Yeyy " + userName + "!" +  " you scored " + score + " out of 5");

  console.log("---------------------------------");  
  console.log("High Scores: ")
  console.log("Tejas : 4")
  console.log("Om : 3")