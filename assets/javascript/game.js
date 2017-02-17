var wordList = [
"bert",
"armondo",
"erik",
"jose"
"paul"
]

var chosenWrod = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongGuesses =[];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function starGame() {

	/*
	1. select a word at random
	2. want to break up that random word into letters underscores
	3. we want to add those underscores to the HTML
	4. numguesses always equal 9 and blankandsuccess (array that stores used letters) and wrongguesses is empty as well 
}*/

numGuesses = 9;
blanksAndSuccesses =[];
wrongGuesses =[];

function checkLetters(letter) {
	/* 
	1. compare the letter the user picks matches any of the letters in the word
	2. I want a conditional statement to determine if the letter the user picked is in the word. IF so, do something, if not,  do something else
	3. If the use is wrong we want to decrease the numGuesses variable by one 
}*/

function roundComplete() {
	/* 
	1. its going to update the HTML with letters that are in the word
	2. its going to update the HTML with guesses we have left
	3. its going to update the HTML to show the wrong guesses
	4. its going to determnine whether the user won the game or not
}*/

function 