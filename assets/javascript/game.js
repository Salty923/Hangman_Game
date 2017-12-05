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

 var wins = 0;

 var losses = 0;

 var display = [];

 //create array for matching letter indices]
 var indices = [];
 

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
 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML = losses;

//create array with letters in it//
 var answerLetters = answer.split([]);
 console.log(answerLetters);

 //Get user input//
	var allGuess = [];	 
	document.onkeyup = function() {
    var userGuess = event.key;
	document.getElementById('guessed').innerHTML = allGuess;
	console.log(allGuess);


 	
 	//find index match of user guess//
 	var idx = answerLetters.indexOf(userGuess);

 	if ( idx  === -1){
			totalGuess -- ;
			message.innerHTML = " Try again";
	}

 	//Loop throught to find all instances of user guess//
 	while (idx != -1) {
 		//push index to array for storage//
  		dashes[idx] = userGuess;
  		var display = dashes.join('');
  		//incrementing idx by 1 to check next index//	 
		
		document.getElementById('lines').innerHTML = display;
		document.getElementById('remaining').innerHTML = totalGuess;
		if (dashes.join('') === answer){
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			alert('youwin');
		} else if ( totalGuess === 0){
			losses ++;
			document.getElementById('losses').innerHTML = losses;
			alert('you lose');

		} else{
			allGuess.push(userGuess);
			document.getElementById('guessed').innerHTML = allGuess;
			message.innerHTML = "Keep it going!"
		}
		idx = answerLetters.indexOf(userGuess, idx + 1);
}

}







 //display matching letters in Dom//

 



 //if all letters are filled in correct, you win, restart game.

 //if remaining guess are === 0, alert, try again//

 //if remaining guess are >0 allow for additional imput//

 //Create button to restart game//



