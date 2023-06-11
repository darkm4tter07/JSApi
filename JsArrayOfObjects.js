//turning JSON data into js array of objects

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

const getTodos = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange',()=>{
		
		if(request.readyState === 4 && request.status === 200){
			const data = JSON.parse(request.responseText);
			
			//this parse function takes json string and turns it into js objects.
			callback(undefined, data);
			
		}else if(request.readyState === 4){
			callback('Could not fetch data',undefined);
		}
	});


	request.open('GET','https://jsonplaceholder.typicode.com/todos/');

	request.send();
};

getTodos((err,data) => {
	console.log('Callback fired');
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

 