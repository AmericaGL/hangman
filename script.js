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

// Class definition -- cheat sheet
// var Student = function(firstName, lastName, age){
//   this.fullName = firstName;
//   this.lastName = lastName;
// 	 this.age = age;
// };

// Student.prototype.sayFullName = function(){
// 	 console.log(this.fullName + " " + this.lastName);
// };

// //Instance definition
// var america = new Student("America", "Lopez", 25);
// var david = new Student("David", "Lighton", 35);

// using instances
// america.sayFullName();
// david.sayFullName();


var Game = function(word) {
	this.word = word;
	this.numGuess = 0;
	this.wrongGuess = 0;
	this.correctGuess= 0;
	this.badSound = new Audio("sound/boo.wav");
	this.goodSound= new Audio("sound/Strong_Punch.mp3");
	this.winSound = new Audio("http://www.freesound.org/data/previews/35/35964_78779-lq.mp3");
	//split takes in a string and returns an array of underscores
	this.guessedWord = word.split("");
	//for loop 
		for (var i=0; i< word.length; i++){
		//guessedWord[i] = "_"
		this.guessedWord[i]="_";
		//show the underscores as soon as ossible. 
		console.log(this.guessedWord.join(''));
		var noSign = this.guessedWord.join(' ');
		$('#wordstatus').text(noSign);
		}
	this.guesses = [];
	this.isHang = false;
};

//create a method for guessing a letter
Game.prototype.guess = function(letter){
  if(this.word.indexOf(letter) !== -1 ){
  	// alert(str.indexOf('test'));  will return position in an array 
	// alert(str.indexOf('fail')); /* -1 */
	this.correctGuess++;
	this.guessedWord[this.word.indexOf(letter)] = letter;
	var hangman = $('#hangman');
	hangman.attr('src', 'images/donald' + this.correctGuess + '.png');
	this.goodSound.play();
	} else{
	//if guess is wrong, increase number of wrong guesses
		this.wrongGuess++;
    	this.badSound.play();

    //donald's hangman changes depending on the amount of errors
	}
	//this will change status of hangman when correct guesses fill the entire word
	if(this.correctGuess === this.word.length){
		this.isHang = true;
		var hangTrump = $('#hangman');
		hangTrump.attr('src', 'images/donald13.png');
		this.winSound.play();
		//code here to change the dom

		alert("You win!");
	}
	//this will create a memory box of letters that have been used
	this.numGuess++;
	this.guesses.push(letter);
	 console.log(this.guessedWord.join(''));
	 var noSign = this.guessedWord.join(' ');
	 $('#wordstatus').text(noSign);
};

//WORD LOVE IS SET UP HERE!!!

 // Game.prototype.randomElement = function () {
 // var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
 //    return this[Math.floor(Math.random() * this.length)];
 // };

// This array holds the words we are going to choose from.
// Feel free to add new words!
// var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

// // This function will pick our word
// function chooseWord () {
//     // Write code here
//     var rand = words[Math.floor(Math.random() * words.length)];
//     return rand;
// };
// var randWord = function randomElement() {
//       var dictionaryQueryRequest;
//       searchUrl = "http://api.wordnik.com/v4/words.json/randomWord?api_key=502ed3f9a5bd08a23400f05524400782b7eb1421762314fea";
//       // Generate the requested object
//       dictionaryQueryRequest = $.ajax({
//             type: "GET",
//             dataType: 'json',
//             url: searchUrl
//       });
//       dictionaryQueryRequest.done(function (data) {
//       	console.log(data.word);
//       });
//       dictionaryQueryRequest.fail(function (error) {
//            console.log("Something Failed calling Wordnik Request:");
//            console.log(error);
//          });
// };

var playGame = new Game("demolition");

var guessButton = $('#guessButton').click(function(){
	var grabValue = $('#guessBox').val();
	// use joing to 
	// $('#wordstatus').text(grabValue);
	
	//Below keeps record of letters that have been used?
	playGame.guess(grabValue);
	$('#guessLetters').append($('<span>'+ grabValue + ' ' + '</span>'));
});


// playGame.guess("o");
// playGame.guess("v");
// playGame.guess("l");
// playGame.guess("e");

var stats = "You took " + playGame.numGuess + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (playGame.correctGuess/playGame.numGuess);
var stats = "You took " + guesses + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (3/guesses);
alert(stats);

var User = function(name) {
    this.name = name;
    this.currentScore = 0;
};
// Game.prototype.randomElement = function () {
//    return this[Math.floor(Math.random() * this.length)]
// }
// This array holds the words we are going to choose from.
// Feel free to add new words!
// var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
// // This function will pick our word
// function chooseWord () {
//     // Write code here
//     var rand = words[Math.floor(Math.random() * words.length)];
//     return rand;
// };
// chooseWord();

	







