var colors = generateRandomColors(6);
var numberofsquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberofsquares = 3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++){
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6);
	numberofsquares = 6;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberofsquares);
	this.textContent = "New Colors";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";	
	messageDisplay.textContent = "";
});
for(var i = 0 ; i < squares.length ; i++){
	// Add initial Colors
	squares[i].style.backgroundColor = colors[i];

	// Add Click Listeners to boxes.
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		// Compare clicked Color
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again ?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}