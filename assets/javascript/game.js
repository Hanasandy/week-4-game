var crystal = {
	win:0,
	lose:0,
	totalScore:0,
	crystals: [1, 2, 3, 4],

	randomNumber:function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	},
	result:0


};

// Generated number
crystal.totalScore = crystal.randomNumber(19, 120);
$(".totalscore").html("TotalScore :" + crystal.totalScore);
//console.log(crystal.totalScore);



function random(){
	for(var i = 0; i < crystal.crystals.length; i++){
	crystal.crystals[i] = crystal.randomNumber(1, 12);
	};

}
random();



var esterling = $(".crystal p");


// Looping through the crytal from the DOM
function crystalRandom(){
	for(var i = 0;  i < esterling.length; i++){

		// Putting the value to the crystal in the DOM
		$(esterling[i]).html(crystal.crystals[i]);
	}
}

crystalRandom();

function reset(){
	random()
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


	if(crystal.totalScore === crystal.result){

		crystal.win++;
		$('.win').html("You win : " + crystal.win);
		reset();


	}

	else if(crystal.result > crystal.totalScore ){
		crystal.lose++;
		$('.lose').html("You lose: " + crystal.lose);
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
	