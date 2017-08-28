console.log("hello");

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}


function executeThisCodeIfFileErrors(){
	console.log("it broken");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "dogs.json");
myRequest.send();

// function executeThisCodeAfterFileLoads2(){
// 	var data = JSON.parse(this.responseText);
// 	var breedsArray = data.breeds;
// 	console.log(breedsArray);
// }


// function executeThisCodeIfFileErrors2(){
// 	console.log("it broken");
// }

// var myRequest2 = new XMLHttpRequest();
// myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
// myRequest.addEventListener("error", executeThisCodeIfFileErrors);
// myRequest.open("GET", "breeds.json");
// myRequest.send();