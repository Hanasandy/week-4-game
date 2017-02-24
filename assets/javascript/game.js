var crystal = { //object
	win:0,  //value
	lose:0,
	computerScore:0,
	crystals: [1, 2, 3, 4],

	randomNumber:function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	},
	result:0


};

// Generate total score
crystal.computerScore = crystal.randomNumber(19, 120);
$(".computerscore").html("Score to match: " + crystal.computerScore);
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

		// Putting the value to the crystal
		$(loopingCrystal[i]).html(crystal.crystals[i]);
	}
}

crystalRandom();

function reset(){
	random();
	crystal.computerScore = crystal.randomNumber(19, 120);
	$(".computerscore").html("Score to Match: " + crystal.computerScore);
		
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
	

    $(".result").html("Your Score: " + crystal.result);


	if(crystal.result === crystal.computerScore){
        
        $(".winlossMessage").html("You won!");
		crystal.win++;
		$('.win').html("Wins: " + crystal.win);

		reset();
	}

	else if(crystal.result > crystal.computerScore){
		
		$(".winlossMessage").html("Sorry you lost...");
		crystal.lose++;
		$('.lose').html("Losses: " + crystal.lose);
		
		reset();
	}
});

