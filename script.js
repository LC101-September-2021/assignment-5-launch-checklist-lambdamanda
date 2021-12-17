// Write your JavaScript code here!



window.addEventListener("load", function() {
	document = this.document

	console.log(this.document.getElementById("formSubmit"))
	document.getElementById("formSubmit").onclick = function(event) {
		event.preventDefault();
		let pilotName = document.getElementById("pilotName").value;
		let copilotName = document.getElementsByName("copilotName")[0].value;
		let fuelLevel = document.getElementsByName("fuelLevel")[0].value;
		let cargoMass = document.getElementsByName("cargoMass")[0].value;
		formSubmission(document, [], pilotName, copilotName, fuelLevel, cargoMass)
	}

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
	   let planet = pickPlanet(listedPlanets);
	   console.log(planet);
	   addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

   }) 
   
});