var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length ; i++){
	// Add initial Colors
	squares[i].style.backgroundColor = colors[i];

	// Add Click Listeners to boxes.
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		// Compare clicked Color
		if(clickedColor == pickedColor){
			alert("Correct");
		}
		else{
			alert("Wrong");
		}
	});
}