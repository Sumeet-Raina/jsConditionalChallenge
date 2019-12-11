//quiz begins, no answers correct

var numberOfCorrectAnswers = 0;

//ask questions
var question1 = prompt("What is the capital of India?");
var question2 = prompt("Name India's national bird?");
var question3 = prompt("What is India's national game?");
var question4 = prompt("Name the prime-minister of India?");
var question5 = prompt("Name the economic capital of India?");

//added if condiions
if (question1.toUpperCase() === 'DELHI') {
  numberOfCorrectAnswers += 1;
} 
if (question2.toUpperCase() === 'PEACOCK') { 
  numberOfCorrectAnswers += 1;
}
if (question3.toUpperCase() === 'HOCKEY') { 
  numberOfCorrectAnswers += 1;
}
if (question4.toUpperCase() === 'MODI') { 
  numberOfCorrectAnswers += 1;
}
if (question5.toUpperCase() === 'MUMBAI') { 
  numberOfCorrectAnswers += 1;
}
// Output results
document.write("<p> Total number of correct answers is " + numberOfCorrectAnswers +"</p>");

//output ranks 
if (numberOfCorrectAnswers === 5 ) {
  document.write('<p><strong>You earned gold crown</strong></p>');
} else if (numberOfCorrectAnswers >= 3) {
  document.write('<p><strong>You earned silvercrown</strong></p>');
} else if (numberOfCorrectAnswers >= 2) {
  document.write('<p><strong>You earned bronze crown</strong></p>');
} else {
  document.write('<p><strong>You earned no crown. You need to study</strong></p>');
}
