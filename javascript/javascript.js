var x = document.getElementById("javascript.js");

var fahren = document.getElementById("Fahrenheit");
var celsius = document.getElementById("Celsius");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", convertir);

function convertir() {
	if(celsius.value !== "" & fahren.value === "") {
		fahren.value = ((celsius.value * 1.8) + 32).toFixed(2);
	}
	if(fahren.value !== "" & celsius.value === "") {
		celsius.value = ((fahren.value - 32)/1.8).toFixed(2);
	}
}





