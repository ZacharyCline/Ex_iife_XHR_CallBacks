"use strict"

function showCarnivores (carnivores) {
	carnivores.forEach(function (carnivore){
		console.log("Carnivore Name",carnivore);

	});
}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);




// function outputMonkeys(monkeyData) {
//   monkeyData.forEach( function(monkey) {
//     console.log("monkey name: ", monkey );
//   });
// }

// Monkeys.getTheMonkeys(outputMonkeys);