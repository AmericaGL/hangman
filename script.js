// <!-- PsuedoCode
// 1)User starts the Game
// 	a)game starts and creates one word and give each letter a single row of seven cells in this case.
// 2)Game play begins
// 	a)prompt the user for a guess
// 	b)repeat the following until the hangman is hanged("A", "E" , "D")
// 	b)check the user guess against the secret word to look for miss, hit, or hang
// 3)Game finishes
// 	a)Give the user a rating based on the number of guess
// 	("You are fired!")
//  -->

//  <!-- declare variables 
// 1)Declare 5 var to hold the location of each letter dashed of the word. Lets call them letter1,letter2,letter3,letter4, letter5.
// 2)Declare a var to hold the user's current guess. 
// 	Let's call it guess!
// 3)Declare a var to hold the number of hits. 
// 	We call its hits and set it to 0!	
// 4)Declare a var to hold the number of guesses. 
// 	We call it guesses and set it to 0!	
// 5)Declare a variable to keep track of whether the hangman is hanged or not.
// 	Let's call it hangman and set it to false.	
//  -->

// <!--variables that been declared
// var guess;
// var hits = 0;
// var guesses = 0;
// var isHang = false;  

// <!--Game Logic  
// LOOP: while the hangman is not hanged
// 		GET: the user's guess
// 		COMPARE: the user's input to valid input values
// 		IF the user's guess is invalid
// 			TELL user to enter is a valid number
// 		ELSE	
// 			ADD one to guesses
// 			IF the user's guess matches a letter
// 				ADD one to hits
// 				IF number of hits equal to (word.length)
// 					SET isHang to true 
// 					TELL user that they #dumptrump
// 				END IF
//			END IF		
// 		END ELSE
// END LOOP
// TELL user stats

var guess;
var hits = 0;
var guesses=0;
var isHang = false;

while(isHang === false){
	//check the user's guess
	guess = prompt("Enter a letter from A-Z");
	//check if its a letter or not
	if(typeof guess !== string ){
	//alerts the user to enter a letter not something else	
		alert("Enter a letter");
	}   else{
		//the user guess looks valid so increase the number of guesses by one
	  	guesses++;
		//if the user guess matches a letter
	  	if(guess === letter1 || guess === letter2 || letter3){
	  	//add one to hits
	  		hits++; 
	  	}
	  		//check if the words length equal to number of hits
	  		if  (hits === 3){
	  			isHang = true;
	  			alert("Congrat! You #dumptrump!");
	  		}
		}

}
var stats = "You took " + guesses + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (3/guesses);
alert(stats);


	







