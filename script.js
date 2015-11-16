// Class definition -- cheat sheet
// var Student = function(firstName, lastName, age){
//   this.fullName = firstName;
//   this.lastName = lastName;
// 	 this.age = age;
// };

// Student.prototype.sayFullName = function(){
// 	 console.log(this.fName + " " + this.lName);
// };

// //Instance definition
// var america = new Student("America", "Lopez", 25);
// var david = new Student("David", "Lighton", 35);


var Game = function(word) {
	this.word = word;
	this.guess = 0;
	//split takes in a string and returns an array
	this.guessedWord = word.split("");
	//for loop
		for (var i=0; i< word.length; i++){
		//guessedWord[i] = "_"
		this.guessedWord[i]="_";
		}
	this.guesses = [];
	this.isHang = false;
};

// alert(str.indexOf('test'));  return position 

//   alert(str.indexOf('fail')); /* -1 */
//method that takes a letter, tries to find it in the word, puts it in the guessedword array


var newGame = new Game("Donald");
console.log(newGame.word);
console.log(newGame.word[0]);
//string can access just like array
// //using instances
// america.sayFullName();
// david.sayFullName();

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




	







