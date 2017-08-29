console.log("hello");

function executeThisCodeAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}


function executeThisCodeIfDogsErrors(){
	console.log("it broken");
}

function executeThisCodeAfterBreedsLoads(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
}

function executeThisCodeIfBreedsErrors(){
	console.log("it broken");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener("load", executeThisCodeAfterDogsLoads);
myDogs.addEventListener("error", executeThisCodeIfDogsErrors);
myDogs.open("GET", "dogs.json");
myDogs.send();

var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener("load", executeThisCodeAfterBreedsLoads);
myBreeds.addEventListener("error", executeThisCodeIfBreedsErrors);
myBreeds.open("GET", "breeds.json");
myBreeds.send();