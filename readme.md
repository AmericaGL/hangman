


Project Description
--------
<img src="https://dl.dropbox.com/s/gro28neh4ry1dfx/Screen%20Shot%202015-11-17%20at%201.55.43%20PM.png?dl=0" align="left" height ="150px"/>

This game was inspired by the infamous Trump Pinanta. We are going to be designing a hangman logic game featuring Donald Trump where the player guesses the  word and the logic behind the game will see if the user has the right answer. 

Normally a hangman grows when the user guesses incorrectly but in this case for the trump pinanta to lose all its parts, the user will need to guess correctly.  

The game will heavily focus on the objected-oriented side of javascript instead of using the functional programming aspect of javascript. The game should only be built with Bootstrap and jQuery. 

The purpose of this game is to build more familiarity with prototypical inheritance, methods, and grabbing values of Bootstrap thru jQuery.

Logic
--------
- Game Set-Up
	- game starts and creates one word 
	- each letter receives a single underscore  
- User Play Begin
	- prompt the user for a guess 
	- repeat the following until guesses run out or Trump is hanged
- Game finishes
	- check the user for a rating based on number of overall guesses and misses. 
 

Features
--------
 
 
| Options | Description |
| ------ | ----------- |
|  Audio  | Sounds will be triggered according to game logic|
| Wordnik API    | access to a random word API that will supply the game | 
 


Installation
------------

Install jQuery by going to:

    http://jquery.com/download/

Contribute
----------
Source Code:

    github.com/AmericaGL/hangman
    
ChangeLog
----------

**Version 1.0.0** 11/30/15
<br />
+ Added a list to an array for game to randomly choose (thanks to Edward from Galvanize);   
+ Generate a simple AJAX call for WordNik API (thanks to Ari from Galvanize).


Coming soon
-------
**Version 1.0.1**
<br />
+ Fix Wordnik API to select random Word thru jQuery and Ajax   
+ Fix bugs to restrict user's input to a letter  
+ Add a spritesheet to title and character  
+ Create high scores scoreboard 


License
-------

The project is licensed under the OpenSource license.


