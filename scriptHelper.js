// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
	if (testInput == "") {
		return "Empty";
	}  else if (isNaN(testInput)) {
		return "Not a Number";
	} else {
		return "Is a Number";
	}
   
}

function warnIfEmpty(field) {
	if (validateInput(field) == "Empty") {
		alert("All fields are required!")
	}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
	warnIfEmpty(pilot)
	warnIfEmpty(copilot)
	warnIfEmpty(fuelLevel)
	warnIfEmpty(cargoLevel)
	document.getElementById("faultyItems").style.visibility = "visible";

	if (validateInput(pilot) == "Is a number") {
		alert("Make sure to enter valid information for each field!");
	}

	if (validateInput(copilot) == "Is a number") {
		alert("Make sure to enter valid information for each field!");
	}

	if (validateInput(fuelLevel) == "Not a Number") {
		alert("Make sure to enter valid information for each field!");
	}

	if (validateInput(cargoLevel) == "Not a Number") {
		alert("Make sure to enter valid information for each field!");
	}

	document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
	document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";

	document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
	document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

	if (Number(fuelLevel) < 10000) {
		document.getElementById("faultyItems").style.visibility = "visible";
		document.getElementById("fuelStatus").innerHTML = "Not enough fuel!";
		document.getElementById("launchStatus").innerHTML = "Shuttle not Ready for Launch";
		document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
	} else {
		document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
	}

	if (Number(cargoLevel) > 10000) {
		document.getElementById("faultyItems").style.visibility = "visible";
		document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
		document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
		document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";

	} else {
		document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
	}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
		return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
	let planet = Math.floor(Math.random()*5);
	return planets[planet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
