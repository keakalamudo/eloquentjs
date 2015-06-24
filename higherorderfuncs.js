function greaterThan(n){
	return function(m){ return m>n;};
}
var greaterThan11 = greaterThan(10);
console.log(greaterThan11(10));