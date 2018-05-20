var todos = [];

var input = prompt("What would you like to do ?");

while(input !== "Quit"){
	
	if(input === "List"){
			console.log("****************");
			todos.forEach(function(todo, i){
				console.log(i + ": " + todo);
			});
			console.log("****************");
	}
	
	else if(input === "New"){
		var a = prompt("Enter a new todo ");
		todos.push(a);
		console.log("Item added");
	}
	
	else if(input === "Delete"){
		var todel = prompt("Enter the index to todo to be deleted ");
		todos.splice(todel,1);
		console.log("Item deleted");
	}
	
	var input = prompt("What would you like to do ?");
}
console.log("You quit the app !!");