$(document).ready(function() {
crystals = ["assets/images/gem1.jpg","assets/images/gem2.jpg","assets/images/gem3.png","assets/images/gem4.jpg"];

	
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
		while(numbers.length < 4){
	    var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}

			

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.attr("data-num", numbers[i]);
			imageCrystal.attr("src", crystals[i]);
			imageCrystal.attr("alt", "crystals");
			imageCrystal.addClass("crystalImage")
			$("#crystals").append(imageCrystal);
		}
	}





	function newGame() {

		counter = 0;
		$("#score").text(counter);

        
        


		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
            }
            




		var numberToGuess = randomIntFromInterval(20,100);

		$(".value").text(numberToGuess);


		$(".crystalImage").on("click", function(){
		    counter = counter + parseInt($(this).data("num"));
		   
		    $("#score").text(counter);

		    if (counter == numberToGuess){
		      $("#status").text("You won!");
		      wins ++;
		      $("#win").text(wins);
		      console.log(wins)
              $("#crystals").empty();
              

		      newCrystals();
              newGame();
              



		        
		    } else if ( counter > numberToGuess){
		        $("#status").text("You lost!")
                losses ++;
                
		        $("#loss").text(losses);
		        console.log(losses)
		        $("#crystals").empty();
		        newCrystals();
		        newGame();
            }
            

		});
	}

});