var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

const getTodos = (callback) => {
	const request = new XMLHttpRequest();

/*This creates a request object however this is an older method 
Now this request object has built-in methods inside javascript*/

	request.addEventListener('readystatechange',()=>{
	//console.log(request, request.readyState);
	/*There are 5 states:
	0- Unsent(open() not called yet), 
	1- opened(open() has been called), 
	2- headers_recieved(send() has been called ), 
	3- loading, 
	4- done(operation is complete)
	*/
		if(request.readyState === 4 && request.status === 200){
		//status=404 is not found and 500 is server side error
			callback(undefined, request.responseText);
			//undefined is first parameter that shows err is undefined and responsetext is second
		}else if(request.readyState === 4){
			callback('Could not fetch data',undefined);
		}
	});
//This function is fired everytime a state change occurs

	request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
//this open function takes two parameters first is request method and second is request endpoint.

	request.send();
//in open function request is made but in send request is sent to server side.
//We can track the progress using an eventlistener

};

getTodos((err,data) => {
	console.log('Callback fired');
	if(err){
		console.log(err);
	}else{
		console.log(data);
		//in this case err=undefined
	}
});
//(err, data) => {...} represents an arrow function that serves as the callback function. It takes two parameters, err and data, which are used to handle any potential error and the retrieved data, respectively. 
