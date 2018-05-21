var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var p1Display = document.getElementById("1");
var p2Display = document.getElementById("2");
var p1score = 0;
var p2score = 0;
var reset = document.getElementById("reset");
var gameover = false;
var winningscore = 5;
var num = document.getElementById("num");

// ------ Player 1 Handler ------------------------
p1.addEventListener("click",function(){
	if(!gameover)
		p1Display.textContent = ++p1score;
	if(p1score >= winningscore){
		p1Display.classList.add("winner");
		gameover = true;
	}
});

// ------ Player 2 Handler ------------------------
p2.addEventListener("click",function(){
	if(!gameover)
		p2Display.textContent = ++p2score;
	if(p2score >= winningscore){
		p2Display.classList.add("winner");
		gameover = true;
	}
});

// ----- Reset Button Handler ---------------------
reset.addEventListener("click",function(){
	p1score = p2score = 0;
	gameover = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = p2Display.textContent = 0;
});

// ----- Winning Score Handler --------------------
num.addEventListener("change", function(){
	winningscore = Number(num.value);
	document.getElementById("playto").textContent = winningscore;
	resetall();
});

function resetall(){
	p1score = p2score = 0;
	gameover = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = p2Display.textContent = 0;
}