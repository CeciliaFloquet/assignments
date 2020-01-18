var duck = {
  name: "duck",
  location: "pond",
  numberOfLegs: "2"
};

var bee = {
  name: "bee",
  location: "hive",
  numberOfLegs: "6"
};

var whale = {
  name: "whale",
  location: "ocean",
  numberOfLegs: "0"
};

var spider = {
  name: "spider",
  location: "web",
  numberOfLegs: "8"
};

var dog = {
  name: "dog",
  location: "house",
  numberOfLegs: "4"
};
//
const data = {
    animals: [duck, bee, whale, spider]
};

data.animals.push(dog);
var names = data.animals.map(element => element.name);

//TASK 3 + 4 + 5
//ShowDetails function with find, innerHTML, destructuring,  destructuring assignment;   call printAnimalDetails that has template literal
var showDetails = name =>{	
	document.getElementById("details").innerHTML = " ";
	let found = data.animals.find(element => element.name  == name);
	let {location,numberOfLegs} = found;
	var params1 = Object.values(found);
	printAnimalDetails(...params1);
};

var renderButtons = names =>{
	var div = document.getElementById("buttons");
	var createB = document.createElement("BUTTON");
	//ForEach
	names.forEach(( name, index) => {
		var createB = document.createElement("BUTTON");
		createB.appendChild(document.createTextNode(name));
		if (index == names.length - 1) {
			createB.setAttribute("onclick", `showDetailsB('${name}')`)
		}else{
			createB.setAttribute("onclick", `showDetails('${name}')`);//olhar isso
		}
		div.appendChild(createB);	
	});	
};

renderButtons(names);

// function printAnimalDetails that print the content on the HTML; use template literal
var printAnimalDetails =(name,location,numberOfLegs) => {
	var divDetails = document.getElementById("details");
	divDetails.innerHTML = `The animal ${name} lives in the ${location} and has ${numberOfLegs} legs.`;
};
//function showDetailsB;  use Object.prototype.values
var showDetailsB = (name) =>{
	var params = Object.values(data.animals.find(element => element.name == name));
	printAnimalDetails(...params);
};

// html fancy
var space = document.getElementsByTagName('button');
for (var i = 0; i < space.length; i++) {
	space[i].style.padding = "20px 30px 30px 40px";
	space[i].style.margin = "10px";
	space[i].style.border = "solid";
	space[i].style.borderRadius = "25px";
}
 
 