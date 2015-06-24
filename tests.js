/*
function findsolution(target){
	function find(start, history){
		if(start == target)
			return history; 
		else if (start > target)
			return null;
		else 
			return find(start + 5, "(" + history + " + 5 )") || 
				   find(start * 3, "(" + history + " * 3 )");
	}
	return find(1, "1");
}
console.log(findsolution(124));	

*/

/*

var journal = []; 

function addEntry(events, transformation){
	journal.push({
		events: events,
		squirrel: transformation
	});
}

addEntry(["Woke Up", "Groomed", "Made Cash", "Chill"], true);

addEntry(["Watered Plants Up", "Ate Spaghetti", "Made Cash", "Chilli Mac"], false);

addEntry(["Swam", "Ate grapes", "Slept", "Chill"], true);

console.log(journal);

*/ 

var todo = [];
todo = [1,2,3,4,5];

function test(){
	return todo.shift();
}

console.log(todo.unshift());