var todos = [];

var input = prompt("What would you like to do ?");

while(input !== "Quit"){
	if(input === "List")
		console.log(todos);
	else if(input === "New"){
		var a = prompt("Enter a new todo ");
		input.push(a);
	}
	var input = prompt("What would you like to do ?");
}
console.log("You quit the app !!");