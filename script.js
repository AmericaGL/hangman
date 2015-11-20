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
	//split takes in a string and returns an array of underscores
	this.guessedWord = word.split("");
	//for loop 
		for (var i=0; i< word.length; i++){
		//guessedWord[i] = "_"
		this.guessedWord[i]="_";
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
	} else{
	//if guess is wrong, increase number of wrong guesses
		this.wrongGuess++;
	}
	//this will change status of hangman when correct guesses fill the entire word
	if(this.correctGuess === this.word.length){
		this.isHang = true;
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

var playGame = new Game("love");

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

// var stats = "You took " + playGame.numGuess + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (playGame.correctGuess/playGame.numGuess);
// alert(stats);


var User = function(name) {
    this.name = name;
    this.currentScore = 0;
};





	







