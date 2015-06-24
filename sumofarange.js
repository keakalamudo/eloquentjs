function range(i,j,step){
	if (step == null) step = 1;
	var list=[];
	
	if (step > 0){
		for (var count = i; count<= j; count+=step){
			list.push(count);
		}		
	}

	else{
		for (var count = j; count>= i; count+=step){
			list.push(count);
		}		
	}
	return list;


}

function sum(entry){
	var num = 0;
	for(var i =0; i < entry.length; i++){
		num += entry[i];
	}return num;
}

//console.log(sum(range(2,10)));
var test = [1,2,3,4];

console.log(range(2,10));
console.log(sum(range(2,10)));


console.log(range(1,10,-3));
console.log(sum(range(1,10,-3)));

