
//add list of holiday words//
var word =[ 'bells', 'blitzen', 'cards', 'chimney', 'comet', 
'dancer', 'dasher', 'donner', 'eggnog', 'elves', 'goodwill', 'merry',
'mistletoe', 'lights', 'jolly', 'icicles', 'prancer',
'pine', 'poinsettia', 'presents', 'reindeer', 'rudolph', 'santa', 
'scrooge', 'sled', 'snowflakes', 'wreath', 'yule',
 'winter', 'toys', 'tinsel', 'stocking', 'star'];

 //Generate random words using index, random and floor//
 var answer = word[Math.floor(Math.random()* word.length)];

 console.log(answer);
 

 //find number of letters in var answer//
//note that underscore and spaces count as length//
 var answerLength = answer.length;

 console.log(answerLength);

 //create underline or underscore in HTML that matches var answerLetters//
 var dashes =[];
 var dash = "_";
 for (var i = 0; i < answerLength; i++){
 	//put dashes in HTML//
 	dashes.push(dash);
 }

//create array with letters in it//
 var answerLetters =[];
 for (var i = 0; i < answerLength; i++){
 	console.log(answer[i]);
 }

 //Get user input//
 document.onkeyup = function(event) {
 	var userGuess = event.key;

 	for( var i = 0; i < answer.length; i++){
 		//See if user input matches letter1//
 	if (userGuess === answerLetters[i]);{
 		//replace dash 1//
 		dashes[i] = userGuess;
 		//wrong answer take away remaining guess//
 	} else {
 		promomt('guess again')
 }

}
 
 //String prototype indexOf function//





 
 // var match = str.match(userGuess);

 //display matching letters in Dom//

 //create user total guesses//
 var totalGuess = 10;

 //If letters do not match subtract one guess//



 //if all letters are filled in correct, you win, restart game.

 //if remaining guess are === 0, alert, try again//

 //if remaining guess are >0 allow for additional imput//

 //Create button to restart game//



