console.log(1);
console.log(2);
//settimeout is a callback function where we pass a function as a parameter and time after it will run
setTimeout(()=> {
	console.log('callback function fired');
}, 0);
//This function will be fired after 2 seconds in the end of code still it comes in the middle of the thread but not block the thread because it is passed in a callback function

console.log(3);
console.log(4);