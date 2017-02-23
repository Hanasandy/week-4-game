var crystal = { //object
	win:0,  //value
	lose:0,
	totalScore:0,
	crystals: [1, 2, 3, 4],

	randomNumber:function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	},
	result:0


};

// Generate total score
crystal.totalScore = crystal.randomNumber(19, 120);
$(".totalscore").html("Score to match :" + crystal.totalScore);
//console.log(crystal.totalScore);


// Generate random number for crystals
function random(){
	for(var i = 0; i < crystal.crystals.length; i++){
	crystal.crystals[i] = crystal.randomNumber(1, 12);
	};

}
random();

// crystal.crystals.map(function(element.index){
// 	crystal.crystals[index] = crystal.randomNumber(1, 12);
// });



var loopingCrystal = $(".crystal p"); //".crystal" is array

// Looping through the crytal from the DOM
function crystalRandom(){
	for(var i = 0;  i < loopingCrystal.length; i++){

		// Putting the value to the crystal in the DOM
		$(loopingCrystal[i]).html(crystal.crystals[i]);
	}
}

crystalRandom();

function reset(){
	random();
	crystal.totalScore = crystal.randomNumber(19, 120);
	$(".totalscore").html("TotalScore :" + crystal.totalScore);
		
	crystalRandom();

	crystal.result = 0;
}

// Add value to the Total Score
$(".crystal").on("click", function(){
    // Grabbing any value from the children by clicking the parent
	var value = $(this).children(this).text();
	// converting the string into real number
	var number = parseInt(value);
	// Adding it to the total score.
	crystal.result += number;
	//console.log(crystal.result);
	

    $(".result").html("The result is: " + crystal.result);


	if(crystal.result === crystal.totalScore){
        
        $(".winlossMessage").html("You won!");
		crystal.win++;
		$('.win').html("Wins: " + crystal.win);

		reset();
	}

	else if(crystal.result > crystal.totalScore){
		
		$(".winlossMessage").html("Sorry you lost...");
		crystal.lose++;
		$('.lose').html("Losses: " + crystal.lose);
		
		reset();
	}
});







//console.log(crystal.result);


// A generated number that starts every time the browser finished loaded


// We have 4 crystals each one represent a number and that number is hidden in the DOM
	// Reveal or add the value number of the crystal every time the user click on it to the total score
	// everytime we click on a crystal, it's going to add to the total score

// Store the wining points and increment by 1 everytime user wins
	// every time the user wins, generated a new random number to the total score
	// Generated a new random number for the crystals every time user click on any crystals
	// Reset the result to 0


// Match the total score with the generated number
	// If they are equals, then the user wins or put 1 to the wining variables
	// If it goes over the generated number, then put 1 to the losing points
	