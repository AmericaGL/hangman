	// 	- game starts and creates one word 
// 	- each letter receives a single row  
// - Game Play Begins
// 	- prompt the user for a guess 
// 	- repeat the following until guesses run out or Trump is hanged
// - Game finishes
// 	- check the user for a rating based on number of overall guesses and misses. 

// STEP 1: User starts the Game
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

//Step 2: Create a method for guessing a letter
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

var playGame = new Game(randomElement());

var guessButton = $('#guessButton').click(function(){
var grabValue = $('#guessBox').val();
	// use joing to 
	// $('#wordstatus').text(grabValue);
	
	//Below keeps record of letters that have been used?
playGame.guess(grabValue);
$('#guessLetters').append($('<span>'+ grabValue + ' ' + '</span>'));
});

//WORD LOVE IS SET UP HERE!!!
function randomElement () {
var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
    var rand = words[Math.floor(Math.random() * words.length)];
    return rand;
}



// This array holds the words we are going to choose from.
// Feel free to add new words!
// var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

// This function will pick our word
// function chooseWord () {
//     // Write code here
//     var rand = words[Math.floor(Math.random() * words.length)];
//     return rand;
// };
// function randomElement() {
//       var dictionaryQueryRequest;
//       searchUrl = "http://api.wordnik.com/v4/words.json/randomWord?api_key=502ed3f9a5bd08a23400f05524400782b7eb1421762314fea";
//       // Generate the requested object
//       dictionaryQueryRequest = $.ajax({
//             type: "GET",
//             dataType: 'json',
//             url: searchUrl
//             async: false,
//       });
//       dictionaryQueryRequest.done(function (data) {
//       	console.log(data.word);
//       });
//       dictionaryQueryRequest.fail(function (error) {
//            console.log("Something Failed calling Wordnik Request:");
//            console.log(error);
//         });
// }


// playGame.guess("o");
// playGame.guess("v");
// playGame.guess("l");
// playGame.guess("e");

// var stats = "You took " + playGame.numGuess + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (playGame.correctGuess/playGame.numGuess);
// var stats = "You took " + guesses + " guesses to #dumptrump, which means " + "your hanging accuracy was " + (3/guesses);
// alert(stats);

// var User = function(name) {
//     this.name = name;
//     this.currentScore = 0;
// };
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




