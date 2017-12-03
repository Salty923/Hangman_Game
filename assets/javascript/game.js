
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

 var totalGuess = 6;
 

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

 var display = dashes.join('');	
 document.getElementById('lines').innerHTML = display;
 document.getElementById('remaining').innerHTML = totalGuess;


//create array with letters in it//
 var answerLetters = answer.split([]);

 

 //Get user input//
	 
document.onkeyup = function() {
	 var userGuess = event.key;


 	//create array for matching letter indices]
 	var indices = [];
 	//find index match of user guess//
 	var idx = answerLetters.indexOf(userGuess);

 	//Loop throught to find all instances of user guess//
 	while (idx != -1) {
 		//push index to array for storage//
  		dashes[idx] = userGuess;
  		//incrementing idx by 1 to check next index//
 		 idx = answerLetters.indexOf(userGuess, idx + 1);
 		 var display = dashes.join('');


	}
		document.getElementById('lines').innerHTML = display;
		document.getElementById('remaining').innerHTML = totalGuess;
		if (dashes.join('') === answer){
		alert('You Win');
		} else if ( totalGuess === 0){
		alert('You Lose');

 		} else if ( idx === -1){
				//If letters do not match subtract one guess//
		totalGuess = totalGuess -1;
		}  else {
		console.log('right');


	}



 	console.log(indices);
 	console.log(dashes);
 	console.log(totalGuess);
 	
}







 //display matching letters in Dom//

 



 //if all letters are filled in correct, you win, restart game.

 //if remaining guess are === 0, alert, try again//

 //if remaining guess are >0 allow for additional imput//

 //Create button to restart game//



