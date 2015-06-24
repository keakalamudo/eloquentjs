// O(n) solution -- reverseArray
function reversify(array){
	var newArray = []; 
	for (var i = 1; i <= array.length; i++){
		newArray.push(array[array.length-i]);
	}return newArray;
}

// 0(log n) solution -- reverseArrayInPlace
function reverseArrays(array){
	for (var i = 0; i< Math.floor(array.length/2); i++){
		var temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}



console.log(reverseArrays([1,2,3,4]));
console.log(reversify([1,2,3,4]));
